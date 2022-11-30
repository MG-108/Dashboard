import React from "react";

import { useStateContext } from "../../contexts/ContextProvider";

const Button = ({
  icon,
  bgColor,
  color,
  size,
  text,
  borderRadius,
  bgHoverColor,
  width,
}) => {
  const { setIsClicked, initialState } = useStateContext();

  return (
    <button
      type="button"
      onClick={() => setIsClicked(initialState)}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size}
      p-3 hover:drop-shadow-xl hover:bg-${bgHoverColor} w-${width}`}
    >
      {icon} {text}
    </button>
  );
};

export default Button;
