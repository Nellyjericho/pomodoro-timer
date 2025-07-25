import { usePomodoro } from "../hooks/usePomodoro";
import { formatTime } from "../utils/formatTime";
import { Button } from "@/components/ui/button";
import { useTheme } from "../context/ThemeContext";
import ThemeSelector from "./ThemeSelector";

export default function TimerDisplay() {
  const { time, isRunning, startPauseTimer, resetTimer } = usePomodoro();
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen ${theme.background} ${theme.text} font-mono flex flex-col items-center justify-center p-4`}
    >
      <div
        className={`border-4 ${theme.border} p-6 rounded-2xl shadow-lg bg-opacity-50 bg-gray-900 max-w-md w-full`}
      >
        <h1 className="text-2xl mb-4 text-center font-pixel shadow-glow animate-flicker">
          ⏰ Retro Pomodoro
        </h1>

        <ThemeSelector />

        <div className="text-6xl text-center mb-6 tracking-widest font-pixel animate-flicker">
          {formatTime(time)}
        </div>

        <div className="flex justify-center gap-4 mb-6">
          <Button
            onClick={startPauseTimer}
            className="bg-green-700 hover:bg-green-600 text-white font-pixel"
          >
            {isRunning ? "Pause" : "Start"}
          </Button>
          <Button
            onClick={resetTimer}
            className="bg-red-700 hover:bg-red-600 text-white font-pixel"
          >
            Reset
          </Button>
        </div>

        <div className="text-sm text-center opacity-70 font-pixel">
          <p>🎮 Theme: {theme.name}</p>
          <p>🎨 Color: {theme.text.replace("text-", "")}</p>
          <p>🔊 SFX: On | ✨ Anim: On</p>
        </div>
      </div>
    </div>
  );
}
