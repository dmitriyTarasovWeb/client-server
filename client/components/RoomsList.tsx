import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import NoRooms from "./NoRooms";
import RoomsListTile from "./RoomsListTile";

const RoomsList = () => {
  const router = useRouter();
  const { rooms } = useSelector((state: RootState) => state.rooms);

  return (
    <div
      className={"h-full bg-spotify-white/5 w-full md:w-auto flex-col sm:border-r sm:border-t border-spotify-white/30 rounded-t-lg".concat(
        router.pathname === "/" ? "flex" : "hidden border-r-0 sm:flex"
      )}
    >
      {rooms.length > 0 ? (
        rooms.map((room: any) => {
          return (
            <RoomsListTile
              key={room.rid}
              room={{
                rid: room.rid,
                name: room.name,
                image_url: room.image_url,
              }}
            />
          );
        })
      ) : (
        <NoRooms />
      )}
    </div>
  );
};

export default RoomsList;
