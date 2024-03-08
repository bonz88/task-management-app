export const BackIcon = () => {
  const iconStyle = {
    transform: "scale(0.7)",
    transformOrigin: "center center",
  };
  return (
    <svg
      className="w-[36px] h-[36px]"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        style={iconStyle}
        d="M19 12H5"
        stroke="#25282B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        style={iconStyle}
        d="M12 19L5 12L12 5"
        stroke="#25282B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
