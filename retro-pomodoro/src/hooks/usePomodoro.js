import { useState, useEffect, useCallback } from "react";
import { useSoundEffects } from "./useSoundEffects";

export function usePomodoro() {
  const [time, setTime] = useState(25 * 60); // 25 minutes
  const [isRunning, setIsRunning] = useState(false);
  const { playStart, playReset, playEnd } = useSoundEffects();

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => {
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

    return () => clearInterval(interval);
  }, [isRunning, playEnd]);

  const startPauseTimer = useCallback(() => {
    setIsRunning((prev) => {
      const next = !prev;
      if (next) playStart();
      return next;
    });
  }, [playStart]);

  const resetTimer = useCallback(() => {
    setTime(25 * 60);
    setIsRunning(false);
    playReset();
  }, [playReset]);

  return {
    time,
    isRunning,
    startPauseTimer,
    resetTimer,
  };
}
