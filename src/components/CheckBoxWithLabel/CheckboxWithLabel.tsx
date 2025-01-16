import { useState } from "react";
import CheckSymbol from "../../icons/CheckSymbol";

interface Props {
  checked: boolean;
  description: string;
  onCheck: (checked: boolean) => void;
  onRename: (newDescription: string) => void;
}

const CheckboxWithLabel = ({
  checked,
  description,
  onCheck,
  onRename,
}: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(description);

  return (
    <div className="flex w-full gap-[15px] items-center">
      <div className="relative w-[30px] h-[30px]">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onCheck(e.target.checked)}
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
              onRename(newDescription);
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
            ${checked ? "line-through text-fe-text-light" : "text-fe-text-dark"}
          `}
        >
          {description}
        </span>
      )}
    </div>
  );
};

export default CheckboxWithLabel;
