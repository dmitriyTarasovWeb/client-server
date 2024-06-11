import React, { useEffect, useState } from "react";
import { BiRefresh, BiUser, BiUserCircle, BiGitBranch, BiGitCommit, BiGitCompare } from "react-icons/bi"; // Импорт иконок
import useGenerateRandomString from "../hooks/useGenerateRandomString";
import ChooseIconButton from "./ChooseIconButton";
import SmallButton from "./SmallButton";

const ChooseIcon = ({
  setAvatar,
  previousAvatar,
  marble
}: {
  setAvatar: (avatar: React.ReactNode) => void;
  previousAvatar?: string;
  marble?: boolean;
}) => {
  const generateRandomString = useGenerateRandomString(16);

  const placeholderAvatar = "/assets/avatar_placeholder.png";

  const loadIcons = () => {
    const newIcons = Array.from({ length: 8 }, (_, i) =>
      i === 0 && previousAvatar ? previousAvatar : marble ? generateRandomString : getRandomIcon(i) // Убраны скобки здесь
    );
    setIcons(newIcons);
  };

  const getRandomIcon = (index: number): React.ReactNode => {
    switch(index) {
      case 1:
        return <BiUser />;
      case 2:
        return <BiUserCircle />;
      case 3:
        return <BiGitBranch />;
      case 4:
        return <BiGitCommit />;
      case 5:
        return <BiGitCompare />;
      default:
        return <BiUser />;
    }
  };

  useEffect(() => {
    loadIcons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [icons, setIcons] = useState<React.ReactNode[]>([]);
  const [selectedIdx, setSelectedIdx] = useState<number>(0);

  const handleIconClick = (index: number) => {
    setSelectedIdx(index);
  };

  useEffect(() => {
    setAvatar(icons[selectedIdx]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedIdx, icons]);

  const handleRefreshIcons = () => {
    loadIcons();
  };

  return (
    <div className="flex flex-col items-center px-4">
      <div className="w-full flex flex-col sm:flex-row items-center">
        <div className="h-24 sm:h-36 my-[0.5rem] rounded-full">
          {icons[selectedIdx] || placeholderAvatar}
        </div>
        <span className="hidden sm:flex h-24 mr-0 ml-2 w-[1px] border border-r-0 border-spotify-green/30" />
        <span className="sm:hidden my-2 h-[1px] w-36 border border-b-0 border-spotify-green/30" />
        <div className="w-full flex flex-wrap justify-center">
          {icons.map((icon, i) => {
            return (
              <ChooseIconButton
                key={i.toString()}
                icon={icon}
                idx={i}
                selectedIdx={selectedIdx}
                handleIconClick={handleIconClick}
              />
            );
          })}
        </div>
      </div>
      <SmallButton onClick={handleRefreshIcons}>
        <BiRefresh className="text-xl mr-1" />
        Refresh Icons
      </SmallButton>
    </div>
  );
};

export default ChooseIcon;
