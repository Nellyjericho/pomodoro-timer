import React from "react";
import { usePomodoro } from "../context/PomodoroContext"; // ✅ This one!
import { useTheme } from "../context/ThemeContext";
import ThemeSelector from "./ThemeSelector";
import ModeSelector from "./ModeSelector";
import Controls from "./controls";
import StatsPanel from "./statsPanel";
import { formatTime } from "../utils/formatTime";

export default function TimerDisplay() {
  const { time, isRunning, startPauseTimer, resetTimer, mode, setMode } = usePomodoro();
  const { theme } = useTheme();

  console.log("TimerDisplay rendered with time:", time); // 👀 This is what you're seeing

  return (
    <div className={`min-h-screen ${theme.background} ${theme.text} font-mono flex flex-col items-center justify-center p-4 bg-grid`}>
      <div className={`border-4 ${theme.border} p-6 rounded-2xl shadow-lg bg-opacity-50 bg-gray-900 max-w-md w-full`}>
        <h1 className="text-2xl mb-4 text-center font-pixel shadow-glow animate-flicker">
          ⏰ Retro Pomodoro
        </h1>

        <ThemeSelector />
        <ModeSelector mode={mode} setMode={setMode} />

        <div className="text-6xl text-center mb-6 tracking-widest font-pixel animate-flicker">
          {formatTime(time)}
        </div>

        <Controls />

        <StatsPanel />
      </div>
    </div>
  );
}
