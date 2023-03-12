import React from "react";
import { TimerPause } from "iconsax-react";

export default function PlayButton(props) {
  return (
    <>
      <button
        {...props}
        className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-zinc-500 cursor-pointer shadow-lg hover:bg-zinc-50 hover:shadow-none transition duration-200 ease-in-out"
      >
        <TimerPause size="24" color="#e74c3c" variant="Broken" />
      </button>
    </>
  );
}
