interface Props {
  placeholder: string;
  onEnter: (value: string) => void;
}

export default function InputCustom({ placeholder, onEnter }: Props) {
  return (
    <input
      data-testid="custom-input"
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          onEnter(e.currentTarget.value);
          e.currentTarget.value = "";
        }
      }}
      placeholder={placeholder}
      className="
      px-[15px] py-[20px] rounded-[10px] border-2 
    border-fe-input-stroke focus:outline-none 
    focus:border-fe-input-stroke-focus
    placeholder-fe-text-light bg-fe-input-background 
    text-fe-text-dark w-full h-[60px] text-base
    "
    />
  );
}
