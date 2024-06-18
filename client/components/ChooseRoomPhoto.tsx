import React, { useEffect, useState } from "react";
import { BiRefresh } from "react-icons/bi";
import useGenerateRandomPhoto from "../hooks/useGenerateRandomPhoto";
import ChoosePhotoButton from "./ChoosePhotoButton";
import SmallButton from "./SmallButton";

const ChooseRoomPhoto = ({
  setRoomPhoto,
  previousRoomPhoto,
  marble
}: {
  setRoomPhoto: (photo_url: string) => void;
  previousRoomPhoto?: string;
  marble?: boolean;
}) => {
  const generateRandomPhoto = useGenerateRandomPhoto();

  const placeholderPhoto = "./photos/photo_1.png";

  const loadPhotos = () => {
    const newPhotos = Array.from({ length: 6 }, (_, i) =>
      i === 0 && previousRoomPhoto ? previousRoomPhoto : generateRandomPhoto('photo')
    );
    setPhotos(newPhotos);
  };

  useEffect(() => {
    loadPhotos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [photos, setPhotos] = useState<string[]>([]);
  const [selectedIdx, setSelectedIdx] = useState(0);

  const handlePhotoClick = (idx: number) => {
    setSelectedIdx(idx);
  };

  useEffect(() => {
    setRoomPhoto(photos[selectedIdx]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedIdx, photos]);

  const handleRefreshPhotos = (event: any) => {
    event.preventDefault();
    loadPhotos();
  };

  return (
    <div className="flex flex-col items-center px-4">
      <div className="w-full flex flex-col sm:flex-row items-center">
        <img
          src={photos[selectedIdx] || placeholderPhoto}
          alt=""
          className="h-18 sm:h-36 m-[0.5rem] rounded-md"
        />
        <span className="hidden sm:flex h-24 mr-0 ml-2 w-[1px] border border-r-0 border-spotify-green/30" />
        <span className="sm:hidden my-2 h-[1px] w-36 border border-b-0 border-spotify-green/30" />
        <div className="w-full flex flex-wrap justify-center">
          {photos.map((photo, i) => (
            <ChoosePhotoButton
              key={i.toString()}
              photo={photo}
              idx={i}
              selectedIdx={selectedIdx}
              handlePhotoClick={handlePhotoClick}
            />
          ))}
        </div>
      </div>
      <SmallButton onClick={handleRefreshPhotos} type="green">
        <BiRefresh className="text-xl mr-1" />
        Refresh Photos
      </SmallButton>
    </div>
  );
};

export default ChooseRoomPhoto;
