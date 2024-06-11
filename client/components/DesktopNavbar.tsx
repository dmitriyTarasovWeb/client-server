import React from "react";
import {
  RiAddBoxLine,
  RiAddBoxFill,
} from "react-icons/ri";
import { IoChatbubblesOutline, IoChatbubblesSharp } from "react-icons/io5";
import { IoPeopleOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import NavbarLinkButton from "./NavbarLinkButton";

const DesktopNavbar = () => {
  return (
    <div
      className={"hidden sm:flex w-16 h-full bg-spotify-white/10 rounded-bl-lg  border border-l-0 border-l-0 border-y-0 border-spotify-grey text-spotify-text/50 text-4xl flex-col items-center justify-even/50 px-0".concat()}
    >
      <NavbarLinkButton
        to="/"
        IdleIcon={<IoChatbubblesOutline />}
        ActiveIcon={<IoChatbubblesSharp />}
      />
      <NavbarLinkButton
        to="/join"
        IdleIcon={<IoPeopleOutline />}
        ActiveIcon={<IoPeopleOutline />} // Можете оставить также, или выбрать другую активную иконку
      />
      <NavbarLinkButton
        to="/create"
        IdleIcon={<RiAddBoxLine />}
        ActiveIcon={<RiAddBoxFill />}
      />
      <NavbarLinkButton
        to="/identity"
        IdleIcon={<Avatar />}
        ActiveIcon={<Avatar active />}
      />
    </div>
  );
};

export default DesktopNavbar;

const Avatar = ({ active }: { active?: boolean }) => {
  const { currentUser } = useSelector((state: RootState) => state.user);
  return (
    <img
      src={currentUser?.avatarUrl}
      alt="avatar"
      className={"rounded-full border-2 ".concat(
        active ? "border-spotify-green" : "border-transparent opacity-70"
      )}
    />
  );
};
