import React, { useContext } from "react";
import CheckCircle from "../components/icons/CheckCircle";
import InputCustom from "../components/InputCustom/InputCustom";
import TaskItem from "../components/TaskItem/TaskItem";
import ManageDataContext from "../contexts/ManageDataContext";

import {
  DndContext,
  closestCenter,
  useSensor,
  useSensors,
  KeyboardSensor,
  MouseSensor,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import SortableTaskItem from "../components/SortableTaskItem/SortableTaskItem";

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
  const keyboardSensor = useSensor(KeyboardSensor);
  const sensors = useSensors(mouseSensor, keyboardSensor);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDragEnd = ({ active, over }: any) => {
    if (active.id !== over.id) {
      const oldIndex = tasks.findIndex((task) => task.id === active.id);
      const newIndex = tasks.findIndex((task) => task.id === over.id);
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
        <header className="bg-fe-header-blue h-24 rounded-none md:rounded-t-[20px] flex items-center justify-center">
          <div className="flex gap-[15px] h-9 w-full m-[30px]">
            <CheckCircle width={36} />
            <h2 className="text-fe-text-dark font-bold text-2xl">TODO List</h2>
          </div>
        </header>
        <main className="bg-white flex-grow rounded-none md:rounded-b-[20px] w-full p-[30px] overflow-auto">
          <div className="w-full h-full">
            <InputCustom
              placeholder="+ Adicione uma tarefa a lista. Pressione Enter para salvar."
              onEnter={handleAddTask}
            />
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
            >
              <div className="mt-[30px]">
                <div className="flex flex-col">
                  <div className="h-[45px] flex items-center">
                    <small className="text-fe-text-light font-bold text-xs">
                      Para fazer
                    </small>
                  </div>
                  {tasks.filter((task) => task.status === "pending").length >
                  0 ? (
                    <>
                      <SortableContext
                        items={tasks.map((task) => task.id)}
                        strategy={verticalListSortingStrategy}
                      >
                        {tasks
                          .filter((task) => task.status === "pending")
                          .map((task) => (
                            <SortableTaskItem
                              key={task.id}
                              task={task}
                              onChange={() => _patchTask(task.id, "completed")}
                            />
                          ))}
                      </SortableContext>
                    </>
                  ) : (
                    <p className="text-center text-sm text-gray-500">
                      Nenhum item pendente 😄
                    </p>
                  )}
                </div>

                <div>
                  <div className="h-[45px] flex items-center">
                    <small className="text-fe-text-light font-bold text-xs">
                      Concluído
                    </small>
                  </div>
                  {tasks.filter((task) => task.status === "completed").length >
                  0 ? (
                    tasks
                      .filter((task) => task.status === "completed")
                      .map((task) => (
                        <TaskItem
                          key={task.id}
                          checked={true}
                          description={task.description}
                          onChange={() => _patchTask(task.id, "pending")}
                        />
                      ))
                  ) : (
                    <p className="text-center text-sm text-gray-500">
                      Nenhum item concluído 😳
                    </p>
                  )}
                </div>
              </div>
            </DndContext>
          </div>
        </main>
      </article>
    </div>
  );
};

export default TodoPage;
