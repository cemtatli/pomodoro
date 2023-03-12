import React from "react";
import { Setting2 } from "iconsax-react";

export default function SettingsButton(props) {
  return (
    <>
      <button
        {...props}
        className="w-12 h-12 bg-white rounded-full flex items-center border-zinc-500 justify-center cursor-pointer shadow-lg hover:bg-zinc-50 hover:shadow-none transition duration-200 ease-in-out"
      >
        <Setting2 size="24" color="#e74c3c" variant="Broken" />
      </button>
    </>
  );
}
