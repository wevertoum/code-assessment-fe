const CheckCircle = ({ width = 36 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={width}
    fill="none"
    viewBox="0 0 36 36"
  >
    <path
      stroke="#578F5D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="4"
      d="M33 16.62V18a15 15 0 1 1-8.895-13.71"
    ></path>
    <path
      stroke="#578F5D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="4"
      d="M33 6 18 21.015l-4.5-4.5"
    ></path>
  </svg>
);

export default CheckCircle;
