import React from "react";
import { Setting4 } from "iconsax-react";

export default function SettingsButton(props) {
  return (
    <>
      <button
        {...props}
        className="p-2 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-lg"
      >
        <Setting4 size="32" color="#697689" variant="Broken" />
      </button>
    </>
  );
}
