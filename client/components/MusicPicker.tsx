import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import MusicPickerList from "./MusicPickerList";

const MusicPicker = ({
  setMusicModalOpen,
}: {
  setMusicModalOpen: (open: boolean) => void;
}) => {
  const [query, setQuery] = useState<string>("");
  const handleSearchInputChange = (event: any) => {
    setQuery(event.target.value);
  };
  const handleModalDismiss = () => {
    setMusicModalOpen(false);
  };
  return (
    <div className="w-full">
      <div className="p-4">
        <div className="w-full relative flex items-center">
          <input
            type="text"
            value={query}
            onChange={handleSearchInputChange}
            placeholder="Search song name..."
            className="peer p-2 pr-10 bg-spotify-black/20 outline-none border-none outline-3.9 focus:outline-4 outline-spotify-green focus:outline-spotify-green rounded-lg sm:text-lg w-full max-w-sm duration-200 text-spotify-white placeholder-spotify-light-grey/50"
          />
          <BiSearchAlt2 className="text-2xl absolute right-2 text-spotify-light-grey peer-focus:text-spotify-white" />
        </div>
      </div>
      <div className="sm:h-[35rem] h-[28rem] p-2 overflow-hidden bg-spotify-black-grey">
        <MusicPickerList query={query} />
      </div>
    </div>
  );
};

export default MusicPicker;
