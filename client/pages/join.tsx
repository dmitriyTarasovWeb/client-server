import { useRouter } from "next/router";
import { useState } from "react";
import Lottie from "react-lottie";
import PrimaryButton from "../components/PrimaryButton";
import visual_anim from "../public/assets/dog_listen.json";
import { getRoomAPI } from "../services/apiServices";
import '@fontsource/montserrat/500.css';


import useAuthModal from "../hooks/useAuthModal";

import {
  useSessionContext,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";

import useToast from "../hooks/useToast";

export default function JoinRoom() {
  const [roomId, setRoomId] = useState<string>("");
  const [validationIssue, setValidationIssue] = useState<string>("");
  const router = useRouter();
  const handleChange = (e: any) => {
    setRoomId(e.target.value);
  };

  
  const { onOpen } = useAuthModal();
  const { session } = useSessionContext();
  const { successToast, errorToast } = useToast();

  const validate = async () => {
    try {
      const res = await getRoomAPI(roomId);
      const exists = res?.data;

      if (!exists) {
        setValidationIssue("No room found");
        return false;
      } else {
        setValidationIssue("");
        return true;
      }
    } catch (err) {
      console.error(err);
      setValidationIssue("No room found");
      return false;
    }
  };

  const handleJoinRoom = async () => {

    if(!session) { onOpen(); return }
    if (localStorage.length === 0) { errorToast("For first create your identity!"); return }

    if (await validate()) {
      router.push(`/${roomId}`);
    }
  };


  return (
    <div className="flex flex-col items-center w-full h-full bg-white/5 p-4 justify-start font-montserrat">
      <div className="w-full h-12 sm:h-24 flex items-center">
        <h1 className="text-spotify-text font-semibold text-2xl mx-auto sm:text-4xl">
          Join a Room
        </h1>
      </div>
      <div className="h-full w-full rounded-br-lg flex flex-col items-center justify-start mt-10">
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: visual_anim,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
            },
          }}
          height={360}
          width={360}

        />
        <p className="px-3 text-center text-spotify-text font-montserrat-300 mt-10">
          {"Join a Room, chat and vibe on music with your friends!"}
        </p>
        <span className="my-5" />
        <input
          type="text"
          value={roomId}
          onChange={handleChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleJoinRoom();
          }}
          placeholder="Enter room id to join..."
          className="p-2 bg-gray-300/10 outline-none border-none outline-2 focus:outline-4 outline-spotify-green-dark/40 focus:outline-spotify-green rounded-lg sm:text-2xl w-full max-w-sm duration-200"
        />
        <span className="my-1" />
        <label className="text-sm text-red-500/80">{validationIssue}</label>
        <span className="my-4" />

        <PrimaryButton onClick={handleJoinRoom}>JOIN ROOM</PrimaryButton>
      </div>
    </div>
  );
}
