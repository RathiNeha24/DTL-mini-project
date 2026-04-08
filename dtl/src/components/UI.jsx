import { C, categoryColors } from "../theme";
 
export const GlowOrb = ({ x, y, color = C.persian, size = 300 }) => (
  <div
    style={{
      position: "absolute",
      left: x,
      top: y,
      width: size,
      height: size,
      background: `radial-gradient(circle, ${color}18 0%, transparent 70%)`,
      borderRadius: "50%",
      pointerEvents: "none",
      zIndex: 0,
    }}
  />
);
 
export const CategoryBadge = ({ cat }) => {
  const color = categoryColors[cat] || C.persian;
  const textColor = color === "#1a3aff" ? C.persianLight : color;
  return (
    <span
      style={{
        display: "inline-block",
        padding: "3px 11px",
        borderRadius: 20,
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: "0.07em",
        textTransform: "uppercase",
        background: color + "22",
        color: textColor,
        border: `1px solid ${color}44`,
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {cat}
    </span>
  );
};
 
export const Tag = ({ label }) => (
  <span
    style={{
      padding: "4px 11px",
      borderRadius: 20,
      fontSize: 12,
      fontWeight: 500,
      background: C.tagBg,
      color: C.tagText,
      border: `1px solid #2a3a8e`,
      fontFamily: "'Inter', sans-serif",
    }}
  >
    {label}
  </span>
);
 
export const SeatBar = ({ registered, seats }) => {
  const pct = Math.min((registered / seats) * 100, 100);
  const full = registered >= seats;
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 12,
          color: C.muted,
          marginBottom: 6,
          fontFamily: "'Inter', sans-serif",
        }}
      >
        <span>{full ? "Fully booked" : `${seats - registered} seats left`}</span>
        <span>
          {registered}/{seats}
        </span>
      </div>
      <div
        style={{
          height: 4,
          borderRadius: 4,
          background: "#1e2d6e",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${pct}%`,
            height: "100%",
            borderRadius: 4,
            background: full
              ? "#e24b4a"
              : `linear-gradient(90deg, ${C.persian}, ${C.accent})`,
            transition: "width 0.6s ease",
          }}
        />
      </div>
    </div>
  );
};
 