import { NextPage } from "next";
import Head from "next/head";
import { ChangeEventHandler, useState } from "react";
import ChooseAvatar from "../components/ChooseAvatar";
import { IoPerson, IoPersonOutline } from "react-icons/io5";
import BigButton from "../components/BigButton";
import { FaLongArrowAltRight } from "react-icons/fa";
import useToast from "../hooks/useToast";
import { useDispatch, useSelector } from "react-redux";
import { createUser, setUser } from "../store/userSlice";
import { useRouter } from "next/router";
import { RootState } from "../store";

import useGenerateUniqueRandomString from "../hooks/useGenerateUniqueRandomString";

import {
  useSessionContext,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import useAuthModal from "../hooks/useAuthModal";

const Home: NextPage = () => {
  const { currentUser } = useSelector((state: RootState) => state.user);
  const [avatarUrl, setAvatarUrl] = useState<string>("");
  const [name, setName] = useState<string>(currentUser?.name || "");
  const handleNameInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setName(e.target.value);
  };
  const { successToast, errorToast } = useToast();
  const dispatch = useDispatch();
  const router = useRouter();
  const generateUID = useGenerateUniqueRandomString();

  const { session } = useSessionContext();
  const { onOpen } = useAuthModal();

  const handleGoToChat = () => {

    if(!session) { onOpen(); return }

    const accessToken = session.access_token;

    if (avatarUrl !== "" && name !== "") {
      if (currentUser) {
        dispatch(setUser({ name, avatarUrl }));
        successToast("Identity changed successfully");
      } else {
//////////////////// сделать прверку если есть не создавать пользователя
        dispatch(createUser({ uid: accessToken, name, avatarUrl }));
///////////////////////
        successToast("Identity created successfully");
      }
      router.push("/");
    } else {
      errorToast("Name should not be empty.");
    }
  };

  return (
    <div className="w-full h-full min-h-full overflow-y-auto p-4 flex flex-col justify-center items-center text-spotify-text">
      <Head>
        <title>Choose Identity</title>
      </Head>
      <h1 className="text-4xl font-bold mb-8 text-center text-gradient from-blue-500 to-indigo-500">CHOOSE YOUR IDENTITY</h1>
      <div className="w-full max-w-lg flex flex-col justify-center items-center">
        <div className="w-full px-4 py-3 text-center sm:text-left rounded-lg shadow-md">
          {/* border-2 border-dashed border-gray-300 border-2 border-dashed border-gray-300 */}
          <label className="font-medium text-xl">Choose an avatar</label>
          <ChooseAvatar
            previousAvatar={currentUser?.avatarUrl}
            setAvatar={setAvatarUrl}
          />
        </div>
        <div className="w-full px-4 py-3 mb-6 mt-4 rounded-lg shadow-md">
          <label className="font-medium text-xl">Choose a name</label>
          <div className="mt-2 w-full relative flex justify-start items-center">
            <input
              type="text"
              id="name"
              autoComplete="off"
              value={name}
              onChange={handleNameInputChange}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleGoToChat();
              }}
              className=" pl-16 peer pl-9 bg-transparent appearance-none text-xl outline-none autofill:bg-none focus:outline-none border-b-2 border-white w-full py-2 rounded-md duration-100 text-white"
              placeholder="Егор Димочкин"
            />
            <IoPersonOutline className="absolute left-2 top-1/2 transform -translate-y-1/2 text-3xl duration-100 text-white" />
            <IoPerson className="hidden absolute left-2 top-1/2 transform -translate-y-1/2 text-3xl text-indigo-500 duration-100" />
          </div>
        </div>
      </div>
      <BigButton onClick={handleGoToChat}>
        GO TO CHAT <FaLongArrowAltRight className="ml-2" />
      </BigButton>
    </div>
  );
};

export default Home;
