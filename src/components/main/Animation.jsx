import React from "react";

function AtomSpinner({ size = 80, color = "#49516f", lineWidth = 1, speedSec = 3.2 }) {
  const half = size / 2;

  return (
    <div style={{ width: size, height: size, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .orbit { transform-origin: ${half}px ${half}px; animation: spin ${speedSec}s linear infinite; }
        .orbit.delay { animation-delay: ${-(speedSec / 3)}s; }
        .orbit.delay2 { animation-delay: ${-(2 * speedSec / 3)}s; }
      `}</style>

      <svg width={size} height={size} viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="4.5" fill={color} />

        <g className="orbit">
          <ellipse cx="50" cy="50" rx="34" ry="18" fill="none" stroke={color} strokeWidth={lineWidth} />
          <circle cx="84" cy="50" r="3.5" fill={color} />
        </g>

        <g className="orbit delay" style={{ transform: "rotate(60deg)" }}>
          <ellipse cx="50" cy="50" rx="34" ry="18" fill="none" stroke={color} strokeWidth={lineWidth} />
          <circle cx="84" cy="50" r="3.5" fill={color} />
        </g>

        <g className="orbit delay2" style={{ transform: "rotate(120deg)" }}>
          <ellipse cx="50" cy="50" rx="34" ry="18" fill="none" stroke={color} strokeWidth={lineWidth} />
          <circle cx="84" cy="50" r="3.5" fill={color} />
        </g>
      </svg>
    </div>
  );
}

export default AtomSpinner;
