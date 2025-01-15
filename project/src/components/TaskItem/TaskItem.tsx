import CheckSymbol from "../icons/CheckSymbol";

interface Props {
  checked: boolean;
  description: string;
  onChange: (checked: boolean) => void;
}

export default function TaskItem({ checked, description, onChange }: Props) {
  return (
    <div
      className="w-full h-[60px] relative flex"
      data-testid="task-item"
    >
      <div className="flex w-full m-[15px] gap-[15px] items-center">
        <div className="relative w-[30px] h-[30px]">
          <input
            type="checkbox"
            onChange={(e) => onChange(e.target.checked)}
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

        <span
          className={`
            text-base flex-1
            ${checked ? "line-through text-fe-text-light" : "text-fe-text-dark"}
          `}
        >
          {description}
        </span>
      </div>

      <div className="w-full h-[1px] bg-fe-separator absolute bottom-0"></div>
    </div>
  );
}
