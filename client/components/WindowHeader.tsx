import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import '@fontsource/montserrat/700.css';

const WindowHeader = () => {
  const { currentUser } = useSelector((state: RootState) => state.user);
  return (
    <div className="hidden sm:flex w-full bg-spotify-black bg-spotify-gradient justify-between items-center p-3 border-b border-spotify-grey">
      <div className="flex items-center">
        <Image
          src="/white-title.png"
          alt=""
          height={40}
          width={40}
        />
        <span className="ml-2 text-white font-montserrat font-semibold text-lg">
          SpotiChat
        </span>
      </div>
      {currentUser ? (
        <img
          src={currentUser?.avatarUrl}
          alt=""
          className="h-7 w-7 rounded-full"
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default WindowHeader;
