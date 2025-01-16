import CheckboxWithLabel from "../CheckBoxWithLabel/CheckboxWithLabel";

interface Props {
  checked: boolean;
  description: string;
  onChange: (checked: boolean) => void;
}

export default function TaskItem({ checked, description, onChange }: Props) {
  return (
    <div className="w-full h-[60px] relative flex" data-testid="task-item">
      <div className="flex w-full m-[15px] items-center justify-between">
        <CheckboxWithLabel
          checked={checked}
          description={description}
          onChange={onChange}
        />
      </div>

      <div className="w-full h-[1px] bg-fe-separator absolute bottom-0"></div>
    </div>
  );
}
