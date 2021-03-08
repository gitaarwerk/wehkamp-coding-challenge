import React from "react";

export const RatingStar = ({
  onClick,
  onMouseEnter,
  onMouseLeave,
  className,
  isHalfy,
  isWhole,
  canHover,
}) => (
  <svg
    className={className}
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    viewBox="0 0 99 99"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    {(isHalfy || isWhole) && (
      <path
        d="M49.7,0 L49.5,0 C22.2,0 0,22.2 0,49.5 C0,76.8 22.2,99 49.5,99 L49.7,99 L49.7,0 Z"
        fill="currentColor"
      />
    )}
    {isWhole && (
      <path
        d="M49.5,0 L49.3,0 L49.3,99 L49.5,99 C76.8,99 99,76.8 99,49.5 C99,22.2 76.8,0 49.5,0 Z"
        id="Path"
        fill="currentColor"
      />
    )}
    {isHalfy && (
      <path
        d="M49.5,0 L49.3,0 L49.3,99 L49.5,99 C76.8,99 99,76.8 99,49.5 C99,22.2 76.8,0 49.5,0 Z"
        id="Path"
        fill="#eee"
      />
    )}

    <path
      d="M61.429469,33.1296481 C61.429469,33.1296481 90.799627,37.6323564 90.799627,37.6323564 C90.799627,37.6323564 68.6410118,55.1734412 68.6410118,55.1734412 L81.4759876,83.1430948 L49.7598815,66.3909927 L16.7250213,83.1430948 L30.8787513,55.1734412 C16.1593351,42.678189 8.799627,36.4305628 8.799627,36.4305628 C8.799627,36.4305628 18.5631827,35.3302579 38.0902941,33.1296481 C45.7435847,15.1386126 49.6018386,6.1430948 49.6650558,6.1430948 C49.728273,6.14403235 53.649744,15.1395501 61.429469,33.1296481 Z"
      fill={canHover ? "currentColor" : "#FFFFFF"}
    />
  </svg>
);
