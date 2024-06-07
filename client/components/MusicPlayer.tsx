import { useRouter } from "next/router";
import { BsPlayFill, BsPauseFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import useRoomMusic from "../hooks/useRoomMusic";
import useSocket from "../hooks/useSocket";
import { RootState } from "../store";
import { useEffect } from "react";
import { Track } from "../interfaces/Track";
import { User } from "../interfaces/User";

const MusicPlayer = () => {
  const {
    currentTrack,
    paused,
    progress,
    duration,
    playpause,
    changeTrack,
    player,
  } = useRoomMusic();

  const { socket } = useSocket();
  const { currentUser } = useSelector((state: RootState) => state.user);

  const router = useRouter();

  const handlePlay = async () => {
    playpause(true);
    socket?.emit("send_play_pause", {
      uid: currentUser?.uid,
      rid: router.query.rid,
      play: true,
      progress,
    });
  };

  const handlePause = () => {
    playpause(false);
    socket?.emit("send_play_pause", {
      uid: currentUser?.uid,
      rid: router.query.rid,
      play: false,
      progress,
    });
  };

  const handleReceivePlayPauseSocket = ({
    uid,
    rid,
    play,
  }: {
    uid: string;
    rid: string;
    play: boolean;
  }) => {
    if (rid === router?.query?.rid) {
      if (play) {
        playpause(true);
      } else {
        playpause(false);
      }
    }
  };

  const handleReceivePlayTrackSocket = ({
    user,
    rid,
    track,
  }: {
    user: User;
    rid: string;
    track: Track;
  }) => {
    if (rid === router.query.rid) {
      changeTrack(track);
    }
  };

  useEffect(() => {
    if (socket) {
      socket.on("receive_play_pause", handleReceivePlayPauseSocket);
      socket.on("receive_play_track", handleReceivePlayTrackSocket);
    }

    return () => {
      socket?.off("receive_play_pause", handleReceivePlayPauseSocket);
      socket?.off("receive_play_track", handleReceivePlayTrackSocket);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket, router, player]);

  return (
    <div className="w-full absolute bottom-0 left-0 right-0 px-4 pb-4">
      <div className="w-full bg-black rounded-lg p-2 shadow-md">
        <div className="p-2 flex items-center justify-evenly">
          <img
            src={currentTrack.thumbnail}
            alt="thumbnail"
            className="h-14 rounded"
          />
          <div className="mx-2 flex flex-col">
            <p className="text-white font-medium truncate w-36">
              {currentTrack.name}
            </p>
            <p className="text-sm text-gray-300 truncate w-36">
              {currentTrack.channel}
            </p>
          </div>
          {paused ? (
            <button
              className="text-spotify-green text-3xl hover:text-green-400"
              onClick={handlePlay}
            >
              <BsPlayFill />
            </button>
          ) : (
            <button
              className="text-spotify-green text-3xl hover:text-green-400"
              onClick={handlePause}
            >
              <BsPauseFill />
            </button>
          )}
        </div>
        <div className="w-full bg-white bg-opacity-20 h-2 rounded-full overflow-hidden">
          <div
            className="bg-spotify-green h-2"
            style={{
              width: `${(Math.ceil(progress * 100) / duration).toString()}%`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
