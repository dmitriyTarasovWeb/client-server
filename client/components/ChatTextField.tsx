import { FC, useState } from "react";
import { FaSmile } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { IoSend } from "react-icons/io5";
import Picker, { IEmojiData } from "emoji-picker-react";

const ChatTextField: FC<{ onSend: (value: string) => void }> = ({ onSend }) => {
  const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);
  const [message, setMessage] = useState("");
  const handleChange = (element: any) => {
    setMessage(element.target.value);
  };

  const handleSmilyClick = (event: React.MouseEvent<Element, MouseEvent>) => {
    event.preventDefault();
    setEmojiPickerOpen(!emojiPickerOpen);
  };

  const handleEmojiClick = (
    event: React.MouseEvent<Element, MouseEvent>,
    data: IEmojiData
  ) => {
    event.preventDefault();
    setMessage(message + data.emoji);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (message !== "") {
      onSend(message);
      setMessage("");
      setEmojiPickerOpen(false);
    }
  };

  const handleEmojiPickerDismiss = () => {
    setEmojiPickerOpen(false);
  };

  return (
    <div className="w-full px-2 mt-14 sm:mt-0">
      {emojiPickerOpen && (
        <>
          <div
            className="fixed w-screen h-screen top-0 left-0 z-20"
            onClick={handleEmojiPickerDismiss}
          />
          <Picker
            onEmojiClick={handleEmojiClick}
            pickerStyle={{
              boxShadow: "none",
              border: "none",
              marginBottom: "1rem",
              color: "black",
              position: "absolute",
              bottom: "6rem",
              zIndex: "30",
            }}
          />
        </>
      )}
      <div className="w-full rounded-full h-16 bg-spotify-black/20 p-3 flex">
        <button
          className="h-full p-1 text-4xl text-spotify-grey/50"
          onClick={handleSmilyClick}
        >
          {emojiPickerOpen ? (
            <AiOutlineCloseCircle className="hover:text-spotify-red" />
          ) : (
            <FaSmile className="hover:text-spotify-yellow" />
          )}
        </button>
        <form onSubmit={handleSubmit} className="flex w-full">
          <input
            type="text"
            value={message}
            placeholder="Say hi to your friends..."
            onChange={handleChange}
            className="w-full mr-2 h-full bg-transparent border-0 outline-none px-4 text-spotify-white"
          />
          <button
            className={"h-full text-spotify-white text-2xl rounded-full sm:px-8 px-6 duration-300 ".concat(
              message !== "" ? "bg-spotify-green" : "bg-spotify-green/50"
            )}
          >
            <IoSend />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatTextField;
