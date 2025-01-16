import { useContext, useState } from "react";
import ManageDataContext from "../../contexts/ManageDataContext";
import CheckSymbol from "../../icons/CheckSymbol";
import DragAndDrop from "../../icons/DragAndDrop";

interface Props {
  task: Models.Task;
}

export default function TaskItem({ task }: Props) {
  const { _patchTask } = useContext(ManageDataContext);

  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(task.description);

  const handleCheck = (isChecked: boolean) => {
    _patchTask(task.id, { status: isChecked ? "completed" : "pending" });
  };

  const handleRename = (newDescription: string) => {
    _patchTask(task.id, { description: newDescription });
  };

  return (
    <div
      className={`w-full h-[60px] relative flex ${
        isEditing ? "bg-fe-input-background" : ""
      }`}
      data-testid="task-item"
    >
      <div className="flex w-full m-[15px] items-center justify-between">
        <div className="flex w-full gap-[15px] items-center">
          <div className="relative w-[30px] h-[30px]">
            <input
              type="checkbox"
              checked={task.status === "completed"}
              onChange={(e) => handleCheck(e.target.checked)}
              className={`
          absolute
          appearance-none peer shrink-0
          w-[30px] h-[30px] border-2 border-fe-text-light rounded-lg bg-white
          checked:bg-fe-text-light checked:border-0 checked:border-none
          disabled:border-steel-400 disabled:bg-steel-400
        `}
            />
            <CheckSymbol
              className="
          absolute inset-0 m-auto
          w-5 h-5
          hidden peer-checked:block
          pointer-events-none"
            />
          </div>

          {isEditing ? (
            <input
              type="text"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleRename(newDescription);
                  setIsEditing(false);
                }
              }}
              className="text-base flex-1 bg-transparent border-none outline-none text-fe-text-dark caret-fe-text-dark"
              autoFocus
            />
          ) : (
            <span
              onClick={() => setIsEditing(true)}
              className={`
          text-base flex-1
          ${
            task.status === "completed"
              ? "line-through text-fe-text-light"
              : "text-fe-text-dark"
          }
        `}
            >
              {task.description}
            </span>
          )}
        </div>
        <DragAndDrop size={20} />
      </div>

      <div className="w-full h-[1px] bg-fe-separator absolute bottom-0"></div>
    </div>
  );
}
