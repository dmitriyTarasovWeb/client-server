import React from "react";

const ChoosePhotoButton = ({
  photo,
  idx,
  selectedIdx,
  handlePhotoClick
}: {
  photo: string;
  idx: number;
  selectedIdx: number;
  handlePhotoClick: (idx: number) => void;
}) => {
  return (
    <button
      onClick={() => handlePhotoClick(idx)}
      className={"h-12 sm:h-14 m-[0.05rem] sm:m-1 p-1 rounded-full hover:outline hover:outline-spotify-green-dark/30 ".concat(
        idx === selectedIdx ? "outline outline-spotify-green-dark" : ""
      )}
    >
      <img src={photo} alt={`Photo ${idx}`} className="w-full h-full object-cover" />
    </button>
  );
};

export default ChoosePhotoButton;
