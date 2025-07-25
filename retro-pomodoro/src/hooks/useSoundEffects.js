import { useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";

export function useSoundEffects() {
  const { themeKey } = useTheme();
  const startRef = useRef(null);
  const resetRef = useRef(null);
  const endRef = useRef(null);

  useEffect(() => {
    startRef.current = new Audio(`/sounds/${themeKey}/start.mp3`);
    resetRef.current = new Audio(`/sounds/${themeKey}/reset.mp3`);
    endRef.current = new Audio(`/sounds/${themeKey}/end.mp3`);
  }, [themeKey]);

  return {
    playStart: () => startRef.current?.play(),
    playReset: () => resetRef.current?.play(),
    playEnd: () => endRef.current?.play(),
  };
}
