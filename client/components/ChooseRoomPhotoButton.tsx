import React from "react";

const ChooseRoomPhotoButton = ({
  photo,
  idx,
  selectedIdx,
  handlePhotoClick
}: {
  photo: string;
  idx: number;
  selectedIdx: number;
  handlePhotoClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) => {
  return (
    <button
      onClick={handlePhotoClick}
      className={`relative overflow-hidden w-12 h-12 sm:w-14 sm:h-14 m-[0.05rem] sm:m-1 p-1 rounded-full hover:outline hover:outline-spotify-green-dark/30 ${
        idx === selectedIdx ? 'outline outline-spotify-green-dark' : ''
      }`}
    >
      <img
        id={idx.toString()}
        src={photo}
        alt={`Room Photo ${idx}`}
        className="absolute inset-0 w-full h-full rounded-full"
      />
    </button>
  );
};

export default ChooseRoomPhotoButton;
