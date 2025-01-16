import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import SortableTaskItem from "../SortableTaskItem/SortableTaskItem";

type BoardSectionProps = {
  id: string;
  title: string;
  emptyLabel: string;
  tasks: Models.Task[];
};

const BoardSection = ({ id, title, emptyLabel, tasks }: BoardSectionProps) => {
  const { setNodeRef } = useDroppable({
    id,
  });

  return (
    <>
      <div className="flex flex-col">
        <div className="h-[45px] flex items-center">
          <small className="text-fe-text-light font-bold text-xs">
            {title}
          </small>
        </div>

        <SortableContext
          id={id}
          items={tasks.map((task) => task.id)}
          strategy={verticalListSortingStrategy}
        >
          {tasks.length > 0 ? (
            <div ref={setNodeRef}>
              {tasks.map((task) => (
                <SortableTaskItem key={task.id} task={task} />
              ))}
            </div>
          ) : (
            <p className="text-center text-sm text-gray-500">{emptyLabel}</p>
          )}
        </SortableContext>
      </div>
    </>
  );
};

export default BoardSection;
