import React, { createContext, useContext } from "react";
import { usePomodoro as usePomodoroHook } from "../hooks/usePomodoro";

const PomodoroContext = createContext();

export const PomodoroProvider = ({ children }) => {
  const pomodoro = usePomodoroHook();
  return (
    <PomodoroContext.Provider value={pomodoro}>
      {children}
    </PomodoroContext.Provider>
  );
};

export const usePomodoro = () => {
  const context = useContext(PomodoroContext);
  if (!context) {
    throw new Error("usePomodoro must be used within a PomodoroProvider");
  }
  return context;
};
