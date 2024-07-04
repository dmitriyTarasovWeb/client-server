import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import '@fontsource/montserrat/700.css';
import Button from "./Button";
import useAuthModal from "../hooks/useAuthModal"
import { useSessionContext, useSupabaseClient } from "@supabase/auth-helpers-react";
import router from "next/router";
import useToast from "../hooks/useToast";
import { createUser, getUserByEmail } from "../services/userApi";

const WindowHeader = () => {
  const { currentUser } = useSelector((state: RootState) => state.user);
  const { session } = useSessionContext();
  const supabaseClient = useSupabaseClient();
  const authModal = useAuthModal();
  const { successToast, errorToast } = useToast();
  const [hasProcessedSession, setHasProcessedSession] = useState(false);

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();

    if (error) {
      errorToast(error.message);
    } else {
      successToast("Logged out!");
      router.reload();
      localStorage.setItem('persist:root', `{user: "{\"currentUser\":{\"uid\":\"eyJhbGciOiJIUzI1NiIsImtpZCI6Incrd3RDYW9kcGFFVVVJb1MiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzE4NzYyNjIxLCJpYXQiOjE3MTg3NTkwMjEsImlzcyI6Imh0dHBzOi8vZGNidnFxcWt0amphcXhyZXRiZWouc3VwYWJhc2UuY28vYXV0aC92MSIsInN1YiI6IjhjN2EyMDU1LWNiOTYtNDdiMS04MGIzLTM2MzQ5NDM4YjU5ZiIsImVtYWlsIjoidGFyYXNvdjE0LjA4LjE5OTlAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3MTg3NTkwMjF9XSwic2Vzc2lvbl9pZCI6ImRkMGZjZjEzLTg2YzQtNDhhMy04YWFjLTRjZGYyZTUwZmJjOCIsImlzX2Fub255bW91cyI6ZmFsc2V9.m6fbeKAtNejvED5NlvzQb-YVaqHin6nGPoR7xSUEc5E\",\"name\":\"3243242\",\"avatarUrl\":\"/avatars/avatar_4.svg\"}}", rooms: "{"rooms":[]}", _persist: "{"version":-1,"rehydrated":true}"}`);
    }
  };

  interface UserData {
    rooms: string[];
  }

  const pushDataLocalStorage = (data: string) => {
    getUserByEmail(data)
      .then((response: UserData) => {
        pushLocalStorage(response);
      })
      .catch((error) => {
        console.log("Error fetching user data:", error);
      });
  };

  const pushLocalStorage = (response: UserData) => {
    if (session && session.user) {
      console.log("session is available:", session.user.email);

      const email = `${session.user.email}`;

      const userData = {
        email: email,
        name: "Jon doe"
      };

      createUser(userData);

      setHasProcessedSession(true);
    } else {
      console.log("session is not available yet");
    }
  };

  useEffect(() => {
    if (session && !hasProcessedSession) {
      const email = `${session.user.email}`;
      pushDataLocalStorage(email);
      startCheckLocalStorage(email);
    }
  }, [session, hasProcessedSession]);

  const startCheckLocalStorage = (email: string) => {
    let previousLocalStorageState = email;

    function checkLocalStorage() {
      const currentLocalStorageState = JSON.stringify(localStorage);

      if (currentLocalStorageState !== previousLocalStorageState) {
        previousLocalStorageState = currentLocalStorageState;
      }

      setTimeout(checkLocalStorage, 500);
    }

    setTimeout(checkLocalStorage, 1);
  };

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
          <div className="flex gap-x-4 items-center">
            <Button onClick={handleLogout} className="bg-white px-6 py-2">
              Logout
            </Button>
          </div>
        ) : (
          <div>
            <Button
              onClick={authModal.onOpen}
              className="bg-white px-6 py-2"
            >
              Log in
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WindowHeader;
