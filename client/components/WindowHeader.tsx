import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import '@fontsource/montserrat/700.css';
import Button from "./Button";

import useAuthModal from "../hooks/useAuthModal"

import { useEffect, useState } from "react";

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
    

    if (error) {
      errorToast (error.message);
    } else {
      successToast ("Logged out!");
      
    }
    router.reload();

    localStorage.setItem('persist:root' ,`{user: "{\"currentUser\":{\"uid\":\"eyJhbGciOiJIUzI1NiIsImtpZCI6Incrd3RDYW9kcGFFVVVJb1MiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzE4NzYyNjIxLCJpYXQiOjE3MTg3NTkwMjEsImlzcyI6Imh0dHBzOi8vZGNidnFxcWt0amphcXhyZXRiZWouc3VwYWJhc2UuY28vYXV0aC92MSIsInN1YiI6IjhjN2EyMDU1LWNiOTYtNDdiMS04MGIzLTM2MzQ5NDM4YjU5ZiIsImVtYWlsIjoidGFyYXNvdjE0LjA4LjE5OTlAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3MTg3NTkwMjF9XSwic2Vzc2lvbl9pZCI6ImRkMGZjZjEzLTg2YzQtNDhhMy04YWFjLTRjZGYyZTUwZmJjOCIsImlzX2Fub255bW91cyI6ZmFsc2V9.m6fbeKAtNejvED5NlvzQb-YVaqHin6nGPoR7xSUEc5E\",\"name\":\"3243242\",\"avatarUrl\":\"/avatars/avatar_4.svg\"}}", rooms: "{"rooms":[]}", _persist: "{"version":-1,"rehydrated":true}"}`);
  };

<<<<<<< HEAD

  let email = `john doe`
=======
  
  
>>>>>>> a96d2eff33cba982d53e04a0b702abdffd5832cc


  interface UserData {
    rooms: string[]; // Пример типа rooms, замените на подходящий тип
    // Другие свойства, которые могут быть возвращены
  }
  
  const pushDataLocalStorage = (data: string) => {
    try{
      getUserByEmail(data)
      .then((response: UserData) => { // Здесь используем интерфейс UserData
        pushLocalStorage(response);
      });
    }
    catch(error){
      console.log("ewew")
    }
  
    const pushLocalStorage = (response: UserData) => { // И здесь тоже

<<<<<<< HEAD
        console.log("session is available:", session.user.email);

        const email = `${session.user.email}`

        const userData = {
          email: email,
          name: "Jon doe"

        }
      createUser(userData);

=======
      if(response === undefined) return

      if(`${response.rooms[0]}` !== `${localStorage.getItem('persist:root')}`){

        localStorage.setItem('persist:root', `${response.rooms[0]}`);
        
        router.reload();
      }
      
    };
  };


  const [hasProcessedSession, setHasProcessedSession] = useState(false);

  useEffect(() => {
    if (session && !hasProcessedSession) {
      console.log("session is available:", session.user.email);

      const email = `${session.user.email}`;

      const userData = {
        email: email,
        name: "Jon Doe"
      };
>>>>>>> a96d2eff33cba982d53e04a0b702abdffd5832cc

      createUser(userData)
      
      pushDataLocalStorage(email);
      startCheckLocalStorage(email);
      

      setHasProcessedSession(true); // Устанавливаем флаг, чтобы прекратить отслеживание
    } else if (!session) {
      console.log("session is not available yet");
    }
<<<<<<< HEAD
  }, [session]);
=======
  }, [session, hasProcessedSession]); // Добавляем hasProcessedSession как зависимость
>>>>>>> a96d2eff33cba982d53e04a0b702abdffd5832cc


  const startCheckLocalStorage = (email:String) =>{

<<<<<<< HEAD


    let previousLocalStorageState = email;
=======
    let previousLocalStorageState = JSON.stringify(localStorage);
>>>>>>> a96d2eff33cba982d53e04a0b702abdffd5832cc

    function checkLocalStorage() {
      const currentLocalStorageState = JSON.stringify(localStorage);

      if (currentLocalStorageState !== previousLocalStorageState) {
<<<<<<< HEAD
          // console.log('Привет!');


=======
          
        addRoomToUserByEmail(`${email}`, `${localStorage.getItem('persist:root')}`)
>>>>>>> a96d2eff33cba982d53e04a0b702abdffd5832cc

          previousLocalStorageState = currentLocalStorageState;
      }

      setTimeout(checkLocalStorage, 500); // Повторно запускаем проверку через 1 секунду
    }
<<<<<<< HEAD

    setTimeout(checkLocalStorage, 1);
}, []);
=======
  
    checkLocalStorage()
  }
>>>>>>> a96d2eff33cba982d53e04a0b702abdffd5832cc



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
