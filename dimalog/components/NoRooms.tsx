import Link from "next/link";
import React from "react";
import { BsFillPlusSquareFill, BsPlusSquare } from "react-icons/bs";
import { RiLoginBoxFill, RiLoginBoxLine } from "react-icons/ri";
import '@fontsource/montserrat/500.css';

const NoRooms = () => {
  return (
    <div className="flex flex-col items-center pt-10 justify-start h-screen bg-spotify-black text-spotify-text font-montserrat">
      <div className="text-center">
        <h1 className="text-3xl font-bold">No Rooms Found</h1>
        <p>It seems like there are no rooms available.</p>
      </div>
      <div className="flex flex-col space-y-4 mt-8">
        <div className="flex items-center justify-center">
          <Link href="/join">
            <button className="flex items-center justify-center px-3 py-2 text-base text-white bg-spotify-green-light rounded hover:bg-spotify-green-dark">
              <RiLoginBoxLine className="mr-1" />
              Join a Room
            </button>
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <Link href="/create">
            <button className="flex items-center justify-center px-3 py-2 text-base text-white bg-spotify-red-light rounded hover:bg-spotify-red">
              <BsPlusSquare className="mr-1" />
              Create a New Room
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NoRooms;
