import TimerDisplay from "./components/TimerDisplay";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <TimerDisplay />
    </ThemeProvider>
  );
}

export default App;
