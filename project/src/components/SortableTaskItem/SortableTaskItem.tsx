import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import TaskItem from "../TaskItem/TaskItem";

type Props = {
  task: Models.Task;
  onChange: (checked: boolean) => void;
};

const SortableTaskItem: React.FC<Props> = ({ task, onChange }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <TaskItem
        checked={task.status === "completed"}
        description={task.description}
        onChange={onChange}
      />
    </div>
  );
};
export default SortableTaskItem;
