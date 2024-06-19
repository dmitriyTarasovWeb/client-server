import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import '@fontsource/montserrat/700.css';
import Button from "./Button";

import useAuthModal from "../hooks/useAuthModal"

import { useEffect } from "react";

import {
  useSessionContext,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";

import  router  from "next/router";

import useToast from "../hooks/useToast";


import {createUser, getUserByEmail, addRoomToUserByEmail} from "../services/userApi";

const WindowHeader = () => {
  const { currentUser } = useSelector((state: RootState) => state.user);

  const { session } = useSessionContext();
  const supabaseClient = useSupabaseClient();

  const authModal = useAuthModal();

  const { successToast, errorToast } = useToast();

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();
    router.reload();

    if (error) {
      errorToast (error.message);
    } else {
      successToast ("Logged out!");
      localStorage.clear();
    }
  };


  let email = `john doe`

  useEffect(() => {

      if (session) {

        console.log("session is available:", session.user.email);

        const email = `${session.user.email}`

        const userData = {
          email: email,
          name: "Jon doe"

        }
      createUser(userData);


      } else {
      console.log("session is not available yet");
    }
  }, [session]);


  useEffect(() => {



    let previousLocalStorageState = email;

    function checkLocalStorage() {
      const currentLocalStorageState = JSON.stringify(localStorage);

      if (currentLocalStorageState !== previousLocalStorageState) {
          // console.log('Привет!');



          previousLocalStorageState = currentLocalStorageState;
      }

      setTimeout(checkLocalStorage, 500); // Повторно запускаем проверку через 1 секунду
    }

    setTimeout(checkLocalStorage, 1);
}, []);



  return (
    <div className="hidden sm:flex w-full bg-spotify-white/25 justify-between items-center p-3">
      <div className="flex items-center">
        <Image
          src="/white-title.png"
          alt=""
          height={40}
          width={40}
        />
        <span className="ml-2 text-white font-montserrat font-semibold text-lg">
          SpotiChat
        </span>
      </div>
      <div>
      {session ? (
            // User is logged in
            <div className="flex gap-x-4 items-center">
              <Button onClick={handleLogout} className="bg-white px-6 py-2">
                Logout
              </Button>

            </div>
          ) : (
            // User is not logged in
            <>

              <div>
                <Button
                  onClick={authModal.onOpen}
                  className="bg-white px-6 py-2"
                >
                  Log in
                </Button>
              </div>
            </>
          )}
              </div>
      </div>

  );
};

export default WindowHeader;
