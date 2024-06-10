import React, { FC, ReactNode, useEffect, useRef } from "react";
import { Toaster } from "react-hot-toast";
import WindowWrapper from "./WindowWrapper";
import { useRouter } from "next/router";
import useRoomMusic from "../hooks/useRoomMusic";

type LayoutWrapperProps = { children: ReactNode };
const LayoutWrapper: FC<LayoutWrapperProps> = ({ children }) => {
  const { playpause } = useRoomMusic();
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (router?.pathname !== "/[rid]") {
      playpause(false);
    }
  }, [router?.pathname]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1; // Установите нужную скорость воспроизведения (0.5 замедлит вдвое)
    }
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center p-0 sm:p-8">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        poster="/assets/bg-static.jpg"
        className="w-auto h-full min-w-[100%] min-h-[100%] fixed z-[-10] object-cover"
      >
        <source
          src="https://res.cloudinary.com/dwcrtqwxw/video/upload/v1717983064/bg-video_hxnn5p_petzko.mov"
          type="video/mp4"
        />
      </video>
      <Toaster />
      <WindowWrapper>{children}</WindowWrapper>
    </div>
  );
};

export default LayoutWrapper;
