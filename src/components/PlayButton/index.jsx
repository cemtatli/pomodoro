import React from "react";
import { TimerStart } from "iconsax-react";

export default function PauseButton(props) {
  return (
    <>
      <button
        {...props}
        className="p-2 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-lg"
      >
        <TimerStart size="32" color="#697689" />
      </button>
    </>
  );
}
