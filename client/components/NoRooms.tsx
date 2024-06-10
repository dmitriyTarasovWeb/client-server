import Link from "next/link";
import React from "react";
import { BsFillPlusSquareFill, BsPlusSquare } from "react-icons/bs";
import { RiLoginBoxFill, RiLoginBoxLine } from "react-icons/ri";
import '@fontsource/montserrat/500.css';

const NoRooms = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-4 py-6 text-spotify-text font-montserrat">
      {/* Desktop View */}
      <div className="hidden sm:flex flex-col items-center justify-center w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">No Rooms Found</h1>
          <p className="text-lg">It seems like there are no rooms available.</p>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center justify-center">
            <Link href="/join">
              <button className="flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-spotify-green-light rounded-md hover:bg-spotify-green-dark transition-colors duration-200 shadow-md">
                <RiLoginBoxLine className="mr-2" />
                Join a Room
              </button>
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <Link href="/create">
              <button className="flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-spotify-red-light rounded-md hover:bg-spotify-red transition-colors duration-200 shadow-md">
                <BsPlusSquare className="mr-2" />
                Create a New Room
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* Mobile View */}
      <div className="sm:hidden flex flex-col items-center w-full">
        <Link href="/join">
          <button className="flex items-center justify-center mb-3 px-16 py-3 text-2xl font-semibold text-white bg-spotify-green-light rounded-md hover:bg-spotify-green-dark transition-colors duration-200 shadow-md">
            <RiLoginBoxLine className="inline-block mr-3" />
            Join a Room
          </button>
        </Link>
        <Link href="/create">
          <button className="flex items-center justify-center px-5 py-3 text-2xl font-semibold text-white bg-spotify-red-light rounded-md hover:bg-spotify-red transition-colors duration-200 shadow-md">
            <BsPlusSquare className="inline-block mr-3" />
            Create a New Room
          </button>
        </Link>
        <div className="text-center mt-8">
          <h1 className="text-3xl font-bold text-white mb-4">No Rooms Found</h1>
          <p className="text-base">It seems like there are no rooms available.</p>
        </div>
      </div>
    </div>
  );
};

export default NoRooms;
