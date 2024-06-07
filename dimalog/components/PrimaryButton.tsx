import React, { FC, ReactNode } from "react";

const PrimaryButton: FC<{
  children: ReactNode;
  onClick?: () => void;
  type?: "submit" | null;
}> = ({ children, onClick, type }) => {
  return type ? (
    <button
      type="submit"
      className="w-full max-w-sm p-4 bg-spotify-green-dark hover:bg-spotify-green outline outline-0 outline-spotify-grey/50 hover:outline-8 hover:text-gray-100 rounded-lg duration-200 font-bold"
    >
      {children}
    </button>
  ) : (
    <button
      onClick={onClick}
      className="w-full max-w-sm p-4 bg-spotify-green-dark hover:bg-spotify-green outline outline-0 outline-spotify-grey/20 hover:outline-8 hover:text-gray-100 rounded-lg duration-200 font-bold"
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
