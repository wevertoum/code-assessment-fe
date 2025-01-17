import React, { useContext } from "react";
import CheckCircle from "../icons/CheckCircle";
import InputCustom from "../components/InputCustom/InputCustom";
import ManageDataContext from "../contexts/ManageDataContext";
import {
  DndContext,
  useSensor,
  useSensors,
  MouseSensor,
  PointerSensor,
  DragOverEvent,
  closestCorners,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import BoardSection from "../components/BoardSection/BoardSection";

const TodoPage: React.FC = () => {
  const { tasks, _postNewTask, _patchTask, _reorderTasks } =
    useContext(ManageDataContext);

  const handleAddTask = async (description: string) => {
    await _postNewTask(description);
  };

  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10,
    },
  });
  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint: {
      distance: 10,
    },
  });
  const sensors = useSensors(mouseSensor, pointerSensor);

  const handleDragOver = ({ active, over }: DragOverEvent) => {
    if (!over) return;
    const activeContainerId = active.data.current?.sortable.containerId;
    const overContainerId = over.data.current?.sortable.containerId;

    if (active.id === over.id) return;
    if (activeContainerId === overContainerId) return;

    const newStatus =
      activeContainerId === "pending-tasks" ? "completed" : "pending";

    _patchTask(active.id.toString(), {
      status: newStatus,
    });
  };

  const handleDragEnd = ({ active, over }: DragOverEvent) => {
    if (active.id !== over!.id) {
      const oldIndex = tasks.findIndex((task) => task.id === active.id);
      const newIndex = tasks.findIndex((task) => task.id === over!.id);
      const updatedTasks = arrayMove(tasks, oldIndex, newIndex);

      _reorderTasks(
        updatedTasks.map((task, index) => ({
          ...task,
          order: index,
        }))
      );
    }
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <article
        className="
          bg-gray-100 w-full h-full rounded-none md:rounded-[20px] 
          md:w-4/5 md:h-4/5 2xl:w-3/5 
          shadow-[0px_2px_20px_0px_rgba(0,0,0,0.1)] flex flex-col
        "
      >
        <header
          className="bg-fe-header-blue h-24 rounded-none
         md:rounded-t-[20px] flex items-center justify-center"
        >
          <div className="flex gap-[15px] h-9 w-full m-[30px]">
            <CheckCircle width={36} />
            <h2 className="text-fe-text-dark font-bold text-2xl">TODO List</h2>
          </div>
        </header>
        <main className="bg-white flex-grow rounded-none md:rounded-b-[20px] w-full p-[30px]">
          <div className="w-full h-full">
            <InputCustom
              placeholder="+ Adicione uma tarefa a lista. Pressione Enter para salvar."
              onEnter={handleAddTask}
            />
            <DndContext
              sensors={sensors}
              collisionDetection={closestCorners}
              onDragOver={handleDragOver}
              onDragEnd={handleDragEnd}
            >
              <div className="mt-[30px]">
                <BoardSection
                  id="pending-tasks"
                  tasks={tasks.filter((task) => task.status === "pending")}
                  title="Para fazer"
                  emptyLabel="Nenhum item pendente 😄"
                />

                <BoardSection
                  id="completed-tasks"
                  tasks={tasks.filter((task) => task.status === "completed")}
                  title="Concluído"
                  emptyLabel="Nenhum item concluído 😳"
                />
              </div>
            </DndContext>
          </div>
        </main>
      </article>
    </div>
  );
};

export default TodoPage;
