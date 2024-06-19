import React from "react";
import Lottie from "react-lottie";
import notFound from "../public/assets/dog_cry.json";

const ChatNotFound = () => {
  return (
    <div className="h-full bg-spotify-black/20 w-full flex flex-col justify-center items-center gap-4">
      <span className="opacity-70">
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: notFound,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
            },
          }}
          height={250}
          width={250}
        />
      </span>
      <h1 className="text-3xl">Room not found</h1>
    </div>
  );
};

export default ChatNotFound;
