import React from "react";
import { Backward } from "iconsax-react";

export default function BackButton(props) {
  return (
    <>
      <button
        {...props}
        className="p-2 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-lg"
      >
        <Backward size="32" color="#697689" variant="TwoTone" />
      </button>
    </>
  );
}
