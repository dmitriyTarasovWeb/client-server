import React from "react";
import Lottie from "react-lottie";
import chatLoader from "../public/assets/dog_what.json";

const ChatLoading = () => {
  return (
    <div className="h-full bg-spotify-black/20 w-full flex justify-center items-center">
      <span className="opacity-70">
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: chatLoader,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
            },
          }}
          height={250}
          width={250}
        />
      </span>
    </div>
  );
};

export default ChatLoading;
