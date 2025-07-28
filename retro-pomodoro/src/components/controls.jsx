import { Button } from "./ui/button";
import { usePomodoro } from "../context/PomodoroContext";

export default function Controls() {
  const { isRunning, startPauseTimer, resetTimer } = usePomodoro();

  return (
    <div className="flex justify-center gap-4 mt-4">
      <Button
        onClick={() => {
          console.log("Start/Pause clicked"); // 👈 test
          startPauseTimer();
        }}
      >
        {isRunning ? "Pause" : "Start"}
      </Button>

      <Button
        onClick={() => {
          console.log("Reset clicked"); // 👈 test
          resetTimer();
        }}
      >
        Reset
      </Button>
    </div>
  );
}
