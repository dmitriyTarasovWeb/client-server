import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FiCopy } from "react-icons/fi";
import ChooseRoomPhoto from "../components/ChooseRoomPhoto";
import PrimaryButton from "../components/PrimaryButton";
import useGenerateUniqueRandomString from "../hooks/useGenerateUniqueRandomString";
import useToast from "../hooks/useToast";
import useCreateRoom from "../hooks/useCreateRoom";
import useGenerateRandomPhoto from "../hooks/useGenerateRandomPhoto"; // Import the new hook
import '@fontsource/montserrat/500.css';

export default function CreateRoom() {
  const [roomName, setRoomName] = useState<string>("");
  const [roomPhoto, setRoomPhoto] = useState<string>("");
  const generateUniqueRandomString = useGenerateUniqueRandomString();
  const generateRandomPhoto = useGenerateRandomPhoto(); // Use the new hook
  const [roomID, setRoomID] = useState<string>("");
  const router = useRouter();
  const handleChange = (e: any) => {
    setRoomName(e.target.value);
  };
  const [validationIssue, setValidationIssue] = useState({ roomName: "" });
  const [chatsHeight, setChatsHeight] = useState(0);

  const { successToast } = useToast();

  const createRoomMutation = useCreateRoom(() => {
    successToast("Room created successfully");
    router.replace(`/${roomID}`);
  });

  const copyToClipBoard = () => {
    navigator.clipboard.writeText(roomID);
    toast("Room ID copied to clipboard!", { icon: "✅" });
  };

  useEffect(() => {
    setRoomID(generateUniqueRandomString());
    setRoomPhoto(generateRandomPhoto('photo')); // Set a random photo on component mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const validate = () => {
    if (roomName === "") {
      setValidationIssue({
        ...validationIssue,
        roomName: "Room name can't be empty",
      });
      return false;
    } else if (roomName.length < 3) {
      setValidationIssue({
        ...validationIssue,
        roomName: "Room name can't be less than 3 characters",
      });
      return false;
    } else {
      setValidationIssue({
        roomName: "",
      });
      return true;
    }
  };

  const handleSubmit = async (e?: any) => {
    e?.preventDefault();
    if (validate()) {
      createRoomMutation.mutate({
        rid: roomID,
        name: roomName,
        image_url: roomPhoto,
      });
    }
  };

  useEffect(() => {
    function handleResize() {
      setChatsHeight(window.innerHeight - 120);
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  //нужно фиксануть самосоздание при выборе аватара
  return (
    <div className="w-full h-full rounded-br-lg flex flex-col justify-start items-center gap-2 bg-white/5 font-montserrat">
      <form
        onSubmit={handleSubmit}
        style={{ height: `${chatsHeight + 40}px` }}
        className="w-full overflow-y-auto p-4 pb-0 pt-1 lg:p-4"
      >
        <div className="w-full h-12 sm:h-20 2xl:h-8 flex justify-center items-center">
          <h1 className="text-spotify-text font-semibold text-2xl sm:text-4xl py-1">
            Create a Room
          </h1>
        </div>
        <div className="w-full flex flex-col items-center">
          <div className="w-full max-w-lg flex flex-col gap-2 items-center justify-center">
            <label className="font-medium">Write a room name</label>
            <span className="h-3 sm:h-0" />
            <input
              value={roomName}
              onChange={handleChange}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSubmit();
              }}
              placeholder="Enter room name..."
              className="sm:p-2 p-1 bg-gray-300/10 outline-none border-none outline-3 focus:outline-4 outline-spotify-green-dark/40 focus:outline-spotify-green rounded-lg sm:text-2xl text-lg w-full duration-200"
            />
            <span className="h-2 sm:h-0" />
            <label className="text-sm text-red-500">
              {validationIssue.roomName}
            </label>
            <span className="2xl:h-0 h-0" />
            <h1 className="font-medium">Choose an image for the room</h1>
            <span className="h-3 sm:h-0" />
            <ChooseRoomPhoto
              setRoomPhoto={setRoomPhoto}
              previousRoomPhoto={roomPhoto} // Pass the initial random photo
              marble // Параметр для генерации случайных изображений
            />
            <span className="2xl:h-0 h-0" />
            <div className="flex flex-col items-start">
              <label className="font-medium mb-2">Room ID</label>
              <div className="w-full flex">
                <span className="mr-4 font-medium text-sm sm:text-lg text-gray-200 underline decoration-spotify-green-dark decoration-1 decoration-dashed underline-offset-4">
                  {roomID}
                </span>
                <span
                  onClick={copyToClipBoard}
                  className="p-1 bg-spotify-green-dark/50 hover:bg-spotify-green rounded-lg flex items-center duration-300 cursor-pointer"
                >
                  <FiCopy className="mr-1" />
                  copy
                </span>
              </div>
            </div>
            <span className="h-2 sm:h-0" />
            <label className="text-sm text-white/40">
              Note: This Room ID will be used when joining room
            </label>
            <span className="2xl:h-0 h-0" />
            <span className="w-full flex justify-center">
              <PrimaryButton type="submit">CREATE ROOM</PrimaryButton>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}
