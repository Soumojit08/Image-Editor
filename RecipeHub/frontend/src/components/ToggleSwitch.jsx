import { useEffect, useState } from "react";

const ToggleSwitch = ({
  leftLabel = "Image",
  rightLabel = "Text",
  initial = "left",
  onChange,
  className = "",
}) => {
  const safeInitial = initial === "right" ? "right" : "left";
  const [position, setPosition] = useState(safeInitial);

  useEffect(() => {
    onChange?.(position === "left" ? "image" : "text");
  }, [position, onChange]);

  const toggle = () => setPosition((p) => (p === "left" ? "right" : "left"));

  const thumbStyle = {
    width: "45%",
    backgroundColor: "#22C55E",
    transform: position === "right" ? "translateX(110%)" : "translateX(0%)",
    transition: "transform 300ms ease",
  };

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <button
        type="button"
        role="switch"
        aria-checked={position === "left"}
        aria-label={`Toggle between ${leftLabel} and ${rightLabel}. Currently ${
          position === "left" ? leftLabel : rightLabel
        } selected.`}
        onClick={toggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggle();
          }
        }}
        className={`relative w-42 h-12 rounded-full bg-zinc-400/10 focus:outline-none focus:ring-2 focus:ring-zinc-400/20 transition-colors duration-200 cursor-pointer `}
      >
        {/* thumb (under labels) */}
        <div
          className="absolute top-1 bottom-1 left-1 rounded-full z-0"
          style={thumbStyle}
          aria-hidden="true"
        ></div>

        {/* labels (above thumb) */}
        <div className="absolute inset-0 flex items-center justify-around pointer-events-none select-none z-10">
          <span
            className={`text-sm font-medium transition-colors duration-200 ${
              position === "left" ? "text-white" : "text-gray-400"
            }`}
          >
            {leftLabel}
          </span>
          <span
            className={`text-sm font-medium transition-colors duration-200 ${
              position === "right" ? "text-white" : "text-gray-400"
            }`}
          >
            {rightLabel}
          </span>
        </div>
      </button>
    </div>
  );
};

export default ToggleSwitch;
