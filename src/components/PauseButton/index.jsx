import React from "react";
import { TimerPause } from "iconsax-react";

export default function PlayButton(props) {
  return (
    <>
      <button
        {...props}
        className="p-2 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-lg"
      >
        <TimerPause size="32" color="#697689" />
      </button>
    </>
  );
}
