"use client";

import { useState } from "react";

// 1. We define exactly what props the button can take
interface ClassicButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "textOutline" | "textblack";
  onClick?: () => void;
  icon?: any;
  className?: string;
  href?: string; // This tells TypeScript that href is a string and it's optional
}

export function ClassicButton({ 
  children, 
  variant = "primary", 
  onClick, 
  icon: Icon, 
  className = "",
  href 
}: ClassicButtonProps) { // 2. Apply the interface here
  const [pressed, setPressed] = useState(false);

  const styles = {
    primary: {
      background: "#8b0000",
      color: "#fff",
      border: "2px solid #8b0000",
    },
    outline: {
      background: "transparent",
      color: "#1a1a1a",
      border: "2px solid #1a1a1a",
    },
    textOutline: {
      background: "transparent",
      color: "#ffffff",
      border: "2px solid #ffffff",
    },
    textblack: {
      background: "white",
      color: "#1a1a1a",
      border: "2px solid #1a1a1a",
    },
  };

  // Switch between <a> and <button> based on presence of href
  const Tag = href ? "a" : "button";

  return (
    <Tag
      // If there's an href, it's a link. If not, it's a regular button.
      {...(href ? { href } : { type: "button" as const })}
      className={`relative inline-flex items-center gap-2.5 font-bold uppercase  text-[10px] px-5 py-[10px] rounded-sm cursor-pointer select-none overflow-hidden no-underline ${className}`}
      style={{
        ...(styles[variant] || styles.primary),
        fontFamily: "'Nunito', sans-serif",
        transition: "transform 0.12s ease, box-shadow 0.12s ease",
        textDecoration: "none"
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
            background: "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.2) 50%, transparent 65%)",
            animation: "shimmer 3s infinite",
          }}
        />
      )}
      {Icon && <Icon className="w-3 h-3 flex-shrink-0 relative z-10" />}
      <span className="relative z-10">{children}</span>

      <style>{`
        @keyframes shimmer {
          0%   { transform: translateX(-130%); }
          55%  { transform: translateX(130%); }
          100% { transform: translateX(130%); }
        }
      `}</style>
    </Tag>
  );
}