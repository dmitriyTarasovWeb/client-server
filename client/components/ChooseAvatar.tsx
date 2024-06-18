import React, { useEffect, useState } from "react";
import { BiRefresh } from "react-icons/bi";
import useGenerateRandomPhoto from "../hooks/useGenerateRandomPhoto";
import useGenerateRandomString from "../hooks/useGenerateRandomString";
import ChooseAvatarButton from "./ChooseAvatarButton";
import SmallButton from "./SmallButton";

const ChooseAvatar = ({
  setAvatar,
  previousAvatar,
  marble
}: {
  setAvatar: (avatar_url: string) => void;
  previousAvatar?: string;
  marble?: boolean;
}) => {
  const generateRandomAvatar = useGenerateRandomPhoto();
  const generateRandomString = useGenerateRandomString(16);

  const placeholderAvatar = "/assets/avatar_placeholder.png";

  const loadAvatars = () => {
    const newAvatars = Array.from({ length: 8 }, (_, i) =>
      i === 0 && previousAvatar ? previousAvatar : marble ? generateRandomString : generateRandomAvatar('avatar')
    );
    setAvatars(newAvatars);
  };


  useEffect(() => {
    loadAvatars();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [avatars, setAvatars] = useState<string[]>([]);
  const [selectedIdx, setSelectedIdx] = useState(0);

  const handleAvatarClick = (event: any) => {
    event.preventDefault();
    const idx = parseInt(event.target.id);
    if (idx >= 0 && idx < 8) setSelectedIdx(idx);
  };

  useEffect(() => {
    setAvatar(avatars[selectedIdx]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedIdx, avatars]);

  const handleRefreshAvatars = (event: any) => {
    event.preventDefault();
    loadAvatars();
  };

  return (
    <div className="flex flex-col items-center px-4">
      <div className="w-full flex flex-col sm:flex-row items-center">
        <img
          src={avatars[selectedIdx] || placeholderAvatar}
          alt=""
          className="h-24 sm:h-36 my-[0.5rem] rounded-full"
        />
        <span className="hidden sm:flex h-24 mr-0 ml-2 w-[1px] border border-r-0 border-spotify-green/30" />
        <span className="sm:hidden my-2 h-[1px] w-36 border border-b-0 border-spotify-green/30" />
        <div className="w-full flex flex-wrap justify-center">
          {avatars.map((avatar, i) => {
            return (
              <ChooseAvatarButton
                key={i.toString()}
                avatar={avatar}
                idx={i}
                selectedIdx={selectedIdx}
                handleAvatarClick={handleAvatarClick}
              />
            );
          })}
        </div>
      </div>
      <SmallButton onClick={handleRefreshAvatars}>
        <BiRefresh className="text-xl mr-1" />
        Refresh Avatars
      </SmallButton>
    </div>
  );
};

export default ChooseAvatar;
