import { usePomodoro } from "../hooks/usePomodoro";
import { useTheme } from "../context/ThemeContext";
import { formatTime } from "../utils/formatTime";

export default function StatsPanel() {
  const { time, isRunning } = usePomodoro();
  const { theme } = useTheme();

  return (
    <div className="text-sm text-center opacity-70">
      <p>⏱️ Time Left: {formatTime(time)}</p>
      <p>🚦 Status: {isRunning ? "Running" : "Paused"}</p>
      <p>🎮 Theme: {theme.name}</p>
      <p>🎨 Color: {theme.text.replace("text-", "")}</p>
      <p>🔊 SFX: On | ✨ Anim: On</p>
    </div>
  );
}
