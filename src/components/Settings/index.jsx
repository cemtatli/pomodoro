import React from "react";
import ReactSlider from "react-slider";
import SettingsContext from "../SettingsContext";
import { useContext } from "react";
import BackButton from "../BackButton";

export default function Settings() {
  const SettingsInfo = useContext(SettingsContext);

  return (
    <div className="flex flex-col items-center justify-center w-full gap-4 ">
      <div className="w-full flex font-medium flex-col">
        <h2 className="text-2xl text-indigo-500 font-bold flex items-center justify-center mb-2 gap-4">
          Settings
        </h2>
        <label className="p-2 w-full items-start capitalize">
          work minutes: {SettingsInfo.workMinutes}:00 <span className="text-sm lowercase">min</span>
        </label>
        <ReactSlider
          className="w-full h-8 rounded-full border-2 border-primary-red"
          thumbClassName="w-7 h-7 rounded-full outline-none shadow-lg cursor-pointer bg-primary-red"
          min={1}
          max={90}
          defaultValue={SettingsInfo.workMinutes}
          onChange={(newValue) => {
            SettingsInfo.setWorkMinutes(newValue);
          }}
        />
      </div>

      <div className="w-full flex flex-col">
        <label className="p-2 w-full items-start capitalize font-medium">
          break minutes: {SettingsInfo.breakMinutes}:00{" "}
          <span className="text-sm lowercase">min</span>
        </label>
        <ReactSlider
          className="w-full h-8 rounded-full border-2 border-primary-green"
          thumbClassName="w-7 h-7 rounded-full outline-none shadow-lg cursor-pointer bg-primary-green"
          min={1}
          max={45}
          defaultValue={SettingsInfo.breakMinutes}
          onChange={(newValue) => {
            SettingsInfo.setBreakMinutes(newValue);
          }}
        />
      </div>
      <BackButton
        onClick={() => {
          SettingsInfo.setShowSettings(false);
        }}
      />
    </div>
  );
}
