import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PlayButton from "../PlayButton";
import PauseButton from "../PauseButton";
import SettingsButton from "../SettingsButton";
import { useContext, useState, useEffect, useRef } from "react";
import SettingsContext from "../SettingsContext";

const red = "#f54e4e";
const green = "#4aec8c";

function Timer() {
  const settingsInfo = useContext(SettingsContext);

  const [isPaused, setIsPaused] = useState(true);
  const [mode, setMode] = useState("work");
  const [secondsLeft, setSecondsLeft] = useState(0);

  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);

  function tick() {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  }

  useEffect(() => {
    function switchMode() {
      const nextMode = modeRef.current === "work" ? "break" : "work"; // switch mode
      const nextSeconds =
        (nextMode === "work" ? settingsInfo.workMinutes : settingsInfo.breakMinutes) * 60;

      setMode(nextMode);
      modeRef.current = nextMode;

      setSecondsLeft(nextSeconds);
      secondsLeftRef.current = nextSeconds;
    }

    secondsLeftRef.current = settingsInfo.workMinutes * 60;
    setSecondsLeft(secondsLeftRef.current);

    const interval = setInterval(() => {
      if (isPausedRef.current) {
        return;
      }
      if (secondsLeftRef.current === 0) {
        return switchMode();
      }

      tick();
    }, 1000);

    return () => clearInterval(interval);
  }, [settingsInfo]); // eslint-disable-line react-hooks/exhaustive-deps

  const totalSeconds =
    mode === "work" ? settingsInfo.workMinutes * 60 : settingsInfo.breakMinutes * 60;
  const percentage = Math.round((secondsLeft / totalSeconds) * 100);

  const minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;
  if (seconds < 10) seconds = "0" + seconds;

  return (
    <>
      <CircularProgressbar
        strokeWidth={4}
        className="max-w-xs w-full"
        value={percentage}
        text={minutes + ":" + seconds}
        styles={buildStyles({
          textColor: mode === "work" ? red : green,
          pathColor: mode === "work" ? red : green,
          textSize: "1.5rem",
          trailColor: "#e5e5e5",
        })}
      />

      <div className="flex items-center justify-center gap-4 p-2 px-6 bg-white shadow-lg rounded-full border-zinc-500 ">
        {isPaused ? (
          <PlayButton
            onClick={() => {
              setIsPaused(false);
              isPausedRef.current = false;
            }}
          />
        ) : (
          <PauseButton
            onClick={() => {
              setIsPaused(true);
              isPausedRef.current = true;
            }}
          />
        )}

        <SettingsButton onClick={() => settingsInfo.setShowSettings(true)} />
      </div>
    </>
  );
}

export default Timer;
