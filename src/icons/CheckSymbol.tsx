interface Props {
  className?: string;
  color?: string;
  strokeWidth?: number;
}

const CheckSymbol = ({
  className,
  color = "#EFF4FC",
  strokeWidth = 2,
}: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 18 13"
    className={className}
  >
    <path
      strokeWidth={strokeWidth}
      stroke={color}
      d="M17 1 6 12 1 7"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
);

export default CheckSymbol;
