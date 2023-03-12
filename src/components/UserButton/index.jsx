import React from "react";
import { User } from "iconsax-react";

export default function UserButton(props) {
  return (
    <>
      <a
        href="https://twitter.com/vaycem"
        target={"_blank"}
        rel="noreferrer"
        {...props}
        className="w-12 h-12 bg-white rounded-full flex items-center border-zinc-500 justify-center cursor-pointer shadow-lg hover:bg-zinc-50 hover:shadow-none transition duration-200 ease-in-out"
      >
        <User size="24" color="#e74c3c" variant="Broken" />
      </a>
    </>
  );
}
