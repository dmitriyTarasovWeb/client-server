import Image from "next/image";
import React from "react";

const ChooseAvatarButton = ({
  handleAvatarClick,
  idx,
  selectedIdx,
  avatar,
}: {
  handleAvatarClick: (event: any) => void;
  idx: number;
  selectedIdx: number;
  avatar: string;
}) => {
  return (
    <button onClick={handleAvatarClick}>
      <img
        id={idx.toString()}
        className={"h-12 sm:h-14 m-[0.05rem] sm:m-1 p-1 rounded-full hover:outline hover:outline-spotify-green-dark/30 ".concat(
          idx === selectedIdx ? "outline outline-spotify-green-dark" : ""
        )}
        src={avatar}
        alt=""
      />
    </button>
  );
};

export default ChooseAvatarButton;
