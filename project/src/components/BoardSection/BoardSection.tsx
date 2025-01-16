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
  onChange: (id: string) => void;
};

const BoardSection = ({
  id,
  title,
  emptyLabel,
  tasks,
  onChange,
}: BoardSectionProps) => {
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
                <SortableTaskItem
                  key={task.id}
                  task={task}
                  onChange={() => onChange(task.id)}
                />
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
