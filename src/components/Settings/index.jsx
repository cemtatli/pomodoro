import React, { useContext } from "react";

import SettingsContext from "../SettingsContext";
import BackButton from "../BackButton";
import UserButton from "../UserButton";

import ReactSlider from "react-slider";

export default function Settings() {
  const SettingsInfo = useContext(SettingsContext);

  return (
    <div className="flex flex-col items-center justify-center w-full gap-4 max-w-xs">
      <div className="w-full flex flex-col">
        <h2 className="text-2xl font-medium  flex items-center justify-center mb-2 gap-4">
          Settings
        </h2>
        <label className="w-full text-sm items-start lg:text-base capitalize my-2 font-medium">
          work: {SettingsInfo.workMinutes}:00 <span className="text-sm lowercase">min</span>
        </label>
        <ReactSlider
          className="w-full h-8 rounded-full flex items-center border-2 border-primary-red "
          thumbClassName="w-6 h-6 rounded-full outline-none shadow-lg cursor-pointer bg-primary-red  "
          min={1}
          max={90}
          defaultValue={SettingsInfo.workMinutes}
          onChange={(newValue) => {
            SettingsInfo.setWorkMinutes(newValue);
          }}
        />
      </div>
      <div className="w-full flex flex-col">
        <label className="w-full items-start text-sm lg:text-base capitalize font-medium my-2">
          break: {SettingsInfo.breakMinutes}:00 <span className="text-sm lowercase">min</span>
        </label>
        <ReactSlider
          className="w-full h-8 rounded-full flex items-center border-2 border-primary-green"
          thumbClassName="w-6 h-6 rounded-full outline-none shadow-lg cursor-pointer bg-primary-green"
          min={1}
          max={90}
          defaultValue={SettingsInfo.breakMinutes}
          onChange={(newValue) => {
            SettingsInfo.setBreakMinutes(newValue);
          }}
        />
      </div>
      <div className="flex items-center mt-2 justify-center gap-4 p-2 px-6 bg-white shadow-lg rounded-full border-zinc-500">
        <BackButton
          onClick={() => {
            SettingsInfo.setShowSettings(false);
          }}
        />
        <UserButton />
      </div>
    </div>
  );
}
