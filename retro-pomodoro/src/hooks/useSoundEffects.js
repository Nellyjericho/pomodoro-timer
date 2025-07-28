import { useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";

export function useSoundEffects() {
  const { themeKey } = useTheme();

  const startRef = useRef(null);
  const resetRef = useRef(null);
  const endRef = useRef(null);

  useEffect(() => {
    // Load new audio files whenever theme changes
    startRef.current = new Audio(`/sounds/${themeKey}/start.mp3`);
    resetRef.current = new Audio(`/sounds/${themeKey}/reset.mp3`);
    endRef.current = new Audio(`/sounds/${themeKey}/end.mp3`);
  }, [themeKey]);

  const playStart = () => {
    if (startRef.current) {
      startRef.current.currentTime = 0;
      startRef.current.play();
    }
  };

  const playReset = () => {
    if (resetRef.current) {
      resetRef.current.currentTime = 0;
      resetRef.current.play();
    }
  };

  const playEnd = () => {
    if (endRef.current) {
      endRef.current.currentTime = 0;
      endRef.current.play();
    }
  };

  return { playStart, playReset, playEnd };
}
