import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import '@fontsource/montserrat/700.css';

const WindowHeader = () => {
  const { currentUser } = useSelector((state: RootState) => state.user);
  return (
    <div className="hidden sm:flex w-full justify-between items-center p-3 border-b border-spotify-grey">
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
    </div>
  );
};

export default WindowHeader;
