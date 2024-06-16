import Lottie from "react-lottie";
import plane from "../public/assets/plane.json";

export default function NoRoom() {
  return (
    <div className="p-4 w-full h-full flex flex-col justify-center items-center bg-white/10 text-spotify-text font-montserrat border-l border-spotify-grey">
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: plane,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
          },
        }}
        height={250}
        width={250}
      />
      <div className="flex flex-col items-center mt-8">
        <p className="text-lg text-center mb-4">
          Immerse yourself in music and chat with your gang in Chat Rooms
        </p>
        <div className="flex items-center">
          <span role="img" aria-label="pointer" className="text-xl mr-2"></span>
          <p className="text-lg">Open a Room from the left</p>
        </div>
      </div>
    </div>
  );
}
