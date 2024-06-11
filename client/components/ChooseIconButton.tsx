import React from "react";

const ChooseIconButton = ({
  handleIconClick,
  idx,
  selectedIdx,
  icon,
}: {
  handleIconClick: (idx: number) => void; // Изменено имя параметра на idx
  idx: number;
  selectedIdx: number;
  icon: React.ReactNode;
}) => {
  return (
    <button onClick={() => handleIconClick(idx)}>
      <div
        id={idx.toString()}
        className={`h-12 sm:h-14 m-[0.05rem] sm:m-1 p-1 rounded-full hover:outline hover:outline-spotify-green-dark/30 ${
          idx === selectedIdx ? "outline outline-spotify-green-dark" : ""
        }`}
      >
        {icon}
      </div>
    </button>
  );
};

export default ChooseIconButton;
