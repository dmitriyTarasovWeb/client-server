import React, { ReactNode } from "react";

const SmallButton = ({
  onClick = () => {},
  children,
  type = "gray",
}: {
  onClick?: (event: any) => void;
  children?: ReactNode;
  type?: "gray" | "red" | "green" | "indigo" | "orange";
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center my-2 rounded-full hover:scale-105 duration-100 ${
        type === "gray"
          ? "text-green-500 bg-green-500/20 border border-green-500"
          : ""
      } ${
        type === "red" ? "text-red-500 bg-red-500/20 border border-red-500" : ""
      } ${
        type === "green"
          ? "text-green-500 bg-green-500/20 border border-green-500"
          : ""
      } ${
        type === "indigo"
          ? "text-indigo-300 bg-spotify-green-dark border border-indigo-500"
          : ""
      } ${
        type === "orange"
          ? "text-orange-500 bg-orange-500/20 border border-orange-500"
          : ""
      }  px-2 py-1 text-sm`}
    >
      {children}
    </button>
  );
};

export default SmallButton;
