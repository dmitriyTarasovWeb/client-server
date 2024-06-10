import React from "react";
import {
  RiAddBoxLine,
  RiAddBoxFill,
} from "react-icons/ri";
import { IoChatbubblesOutline, IoChatbubblesSharp } from "react-icons/io5";
import { IoPeopleOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import MobileNavbarLinkButton from "./MobileNavbarLinkButton";

const MobileNavbar = () => {
  return (
    <div className="sm:hidden flex w-full h-16 backdrop-blur-md bg-spotify-black-grey/50 border border-x-0 border-b-0 border-spotify-grey/30 text-gray-800/50 text-4xl items-center justify-evenly px-1 z-20 sticky">
      <MobileNavbarLinkButton
        to="/"
        IdleIcon={<IoChatbubblesOutline />}
        ActiveIcon={<IoChatbubblesSharp />}
      />
      <MobileNavbarLinkButton
        to="/join"
        IdleIcon={<IoPeopleOutline />}
        ActiveIcon={<IoPeopleOutline />} // Можете оставить также, или выбрать другую активную иконку
      />
      <MobileNavbarLinkButton
        to="/create"
        IdleIcon={<RiAddBoxLine />}
        ActiveIcon={<RiAddBoxFill />}
      />
      <MobileNavbarLinkButton
        to="/identity"
        IdleIcon={<Avatar />}
        ActiveIcon={<Avatar active />}
      />
    </div>
  );
};

export default MobileNavbar;

const Avatar = ({ active }: { active?: boolean }) => {
  const { currentUser } = useSelector((state: RootState) => state.user);

  return (
    <img
      src={currentUser?.avatarUrl}
      alt="avatar"
      className={"rounded-full border-2 ".concat(
        active ? "border-white" : "border-transparent opacity-70"
      )}
    />
  );
};
