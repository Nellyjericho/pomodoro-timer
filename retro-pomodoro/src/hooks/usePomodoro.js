import { useState, useEffect, useCallback, useRef } from "react";
import { useSoundEffects } from "./useSoundEffects";
import { MODES } from "../constants";

export function usePomodoro() {
  const [mode, setMode] = useState("pomodoro");
  const [time, setTime] = useState(MODES.pomodoro);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null); // 💡 persist the timer
  const { playStart, playReset, playEnd } = useSoundEffects();

  useEffect(() => {
    setTime(MODES[mode]);
  }, [mode]);

 useEffect(() => {
  let interval = null;

  if (isRunning) {
    console.log("⏳ Starting interval...");
    interval = setInterval(() => {
      setTime((prevTime) => {
        console.log("⏱️ Tick - Time left:", prevTime);

        if (prevTime <= 1) {
          clearInterval(interval);
          setIsRunning(false);
          playEnd();
          return 0;
        }

        return prevTime - 1;
      });
    }, 1000);
  }

  return () => {
    console.log("🛑 Clearing interval");
    if (interval) clearInterval(interval);
  };
}, [isRunning]);


  const startPauseTimer = useCallback(() => {
     console.log("🔥 Start/Pause clicked");
    setIsRunning((prev) => {
      const next = !prev;
      console.log("✅ Toggling isRunning to:", next);
      if (next) playStart();
      return next;
    });
  }, [playStart]);

  const resetTimer = useCallback(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setIsRunning(false);
    setTime(MODES[mode]);
    playReset();
  }, [mode, playReset]);

  return {
    time,
    isRunning,
    mode,
    setMode,
    startPauseTimer,
    resetTimer,
  };
}
