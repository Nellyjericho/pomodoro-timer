import { MODE_LABELS, MODES } from "../constants";

export default function ModeSelector({ mode, setMode }) {
  return (
    <div className="flex justify-center gap-3 mb-6 flex-wrap">
      {Object.keys(MODES).map((key) => (
        <button
          key={key}
          onClick={() => setMode(key)}
          className={`px-4 py-2 rounded pixel-font border ${
            mode === key
              ? "bg-white text-black"
              : "bg-transparent text-white border-white"
          }`}
        >
          {MODE_LABELS[key]}
        </button>
      ))}
    </div>
  );
}
