import React from "react";
import { Backward } from "iconsax-react";

export default function BackButton(props) {
  return (
    <>
      <button
        {...props}
        className="w-12 h-12 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-lg border-zinc-500 hover:bg-zinc-50 hover:shadow-none transition duration-200 ease-in-out"
      >
        <Backward size="24" color="#e74c3c" variant="TwoTone" />
      </button>
    </>
  );
}
