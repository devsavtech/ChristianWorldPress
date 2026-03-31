"use client";

import { useState } from "react";

export function ClassicButton({ children, variant = "primary", onClick, icon: Icon, className = "" }) {
  const [pressed, setPressed] = useState(false);

  const styles = {
    primary: {
      background: "#8b0000",
      color: "#fff",
      border: "2px solid #8b0000",
      boxShadow: pressed
        ? "1px 1px 0 #3a0000, 0 2px 8px rgba(139,0,0,0.18)"
        : "5px 5px 0 #3a0000, 0 8px 28px rgba(139,0,0,0.3)",
      transform: pressed ? "translate(4px, 4px)" : "translate(0,0)",
    },
    outline: {
      background: "transparent",
      color: "#1a1a1a",
      border: "2px solid #1a1a1a",
      boxShadow: pressed ? "1px 1px 0 #1a1a1a" : "5px 5px 0 #1a1a1a",
      transform: pressed ? "translate(4px, 4px)" : "translate(0,0)",
    },
    textOutline: {
      background: "transparent",
      color: "#ffffff",
      border: "2px solid #ffffff",
      boxShadow: pressed ? "1px 1px 0 #ffffff" : "3px 3px 0 #ffffff",
      transform: pressed ? "translate(2px, 2px)" : "translate(0,0)",
    },
  };

  return (
    <button
      className={`relative inline-flex items-center gap-2.5 font-bold uppercase tracking-[0.14em] text-[10px]  px-8 py-[14px] rounded-sm cursor-pointer select-none overflow-hidden ${className}`}
      style={{
        ...(styles[variant] || styles.primary),
        fontFamily: "'Nunito', sans-serif",
        transition: "transform 0.12s ease, box-shadow 0.12s ease",
      }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      onClick={onClick}
    >
      {variant === "primary" && (
        <span
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.2) 50%, transparent 65%)",
            animation: "shimmer 3s infinite",
          }}
        />
      )}
      {Icon && <Icon className="w-4 h-4 flex-shrink-0 relative z-10" />}
      <span className="relative z-10">{children}</span>

      <style>{`
        @keyframes shimmer {
          0%   { transform: translateX(-130%); }
          55%  { transform: translateX(130%); }
          100% { transform: translateX(130%); }
        }
      `}</style>
    </button>
  );
}