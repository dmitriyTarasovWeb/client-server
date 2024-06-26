import Link from "next/link";
import { FC } from "react";
import { RoomShort } from "../interfaces/RoomShort";
import '@fontsource/montserrat/500.css';

const RoomsListTile: FC<{ room: RoomShort }> = ({ room }) => {
  return (
    <Link href={`/${room.rid}`}>
      <div className="h-16 w-full lg:w-60 flex items-center justify-start sm:px-2 py-2 px-4  shadow-md border-l-0 border-spotify-white/20 text-white-400 text-lg hover:bg-gray-500/10 cursor-pointer rounded-lg">
        <img
          alt="room"
          src={room.image_url}
          className="h-10 rounded-full sm:mr-2 mr-3 aspect-square object-cover"
        />
        <h2 className="hover:underline sm:hidden font-montserrat lg:flex">{room.name}</h2>
      </div>
    </Link>
  );
};

export default RoomsListTile;
