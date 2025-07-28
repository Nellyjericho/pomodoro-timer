import { useTheme } from "../context/ThemeContext";
import { Button } from './ui/button';


export default function ThemeSelector() {
  const { themeKey, setThemeKey, availableThemes } = useTheme();

  return (
    <div className="flex flex-wrap gap-2 justify-center mb-6">
      {availableThemes.map((key) => (
        <Button
          key={key}
          onClick={() => setThemeKey(key)}
          className={`pixel-font px-4 py-2 ${
            themeKey === key ? "bg-green-600 text-white" : "bg-gray-300 text-black"
          }`}
        >
          {key.toUpperCase()}
        </Button>
      ))}
    </div>
  );
}
