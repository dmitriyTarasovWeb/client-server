import axios from "axios";
import { RoomShort } from "../interfaces/RoomShort";
import { LastTrack } from "../interfaces/LastTrack";
import { Message } from "../interfaces/Message";

console.log("env", process.env.NEXT_PUBLIC_SERVER_URL);

export const apiInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL}/api`,
});

export const createRoomAPI = (newRoom: RoomShort) => {
  return apiInstance({ url: "/room", method: "POST", data: newRoom });
};

export const getRoomAPI = (rid: string | string[] | undefined) => {
  return apiInstance({ url: `/room/${rid}`, method: "GET" });
};

export const getLastTrackAPI = (rid: string | string[] | undefined) => {
  return apiInstance({ url: `/music/lasttrack/${rid}`, method: "GET" });
};

export const updateLastTrackAPI = (
  rid: string | string[] | undefined,
  updatedLastTrack: LastTrack
) => {
  return apiInstance({
    url: `/music/lasttrack/${rid}`,
    method: "PUT",
    data: updatedLastTrack,
  });
};

export const deleteRoomAPI = (rid: string | string[] | undefined) => {
  return apiInstance({ url: `/room/${rid}`, method: "DELETE" });
};

export const onlineUsersAPI = (rid: string | string[] | undefined) => {
  return apiInstance({
    url: `/room/${rid}/online`,
    method: "GET",
  });
};

export const searchMusicAPI = (query: string) => {
  return apiInstance({ url: `/music/search/${query}`, method: "GET" });
};

export const postMessageAPI = (newMessage: Omit<Message, "mid">) => {
  return apiInstance({
    url: "/message",
    method: "POST",
    data: newMessage,
  });
};

export const getMessagesAPI = (
  rid: string | string[] | undefined,
  after?: number
) => {
  return apiInstance({ url: `/message/${rid}?after=${after}`, method: "GET" });
};
