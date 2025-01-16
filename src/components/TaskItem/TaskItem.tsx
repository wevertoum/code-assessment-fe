import { useContext } from "react";
import DragAndDrop from "../../icons/DragAndDrop";
import CheckboxWithLabel from "../CheckBoxWithLabel/CheckboxWithLabel";
import ManageDataContext from "../../contexts/ManageDataContext";

interface Props {
  task: Models.Task;
}

export default function TaskItem({ task }: Props) {
  const { _patchTask } = useContext(ManageDataContext);
  const handleCheck = (isChecked: boolean) => {
    _patchTask(task.id, { status: isChecked ? "completed" : "pending" });
  };

  const handleRename = (newDescription: string) => {
    _patchTask(task.id, { description: newDescription });
  };

  return (
    <div className="w-full h-[60px] relative flex" data-testid="task-item">
      <div className="flex w-full m-[15px] items-center justify-between">
        <CheckboxWithLabel
          checked={task.status === "completed"}
          description={task.description}
          onCheck={handleCheck}
          onRename={handleRename}
        />
        <DragAndDrop size={20} />
      </div>

      <div className="w-full h-[1px] bg-fe-separator absolute bottom-0"></div>
    </div>
  );
}
