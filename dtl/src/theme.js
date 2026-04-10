import React from "react";
import { Link, useLocation } from "react-router-dom";

export const COLORS = {
  navy: "#0a0f2c",
  navyMid: "#0d1540",
  persian: "#1a3aff",
  persianMid: "#2947e8",
  persianLight: "#4f6bff",
  persianGlow: "#1a3aff22",
  accent: "#00d4ff",
  accentSoft: "#00d4ff18",
  white: "#f0f4ff",
  muted: "#8896cc",
  cardBg: "#0e1645",
  cardBorder: "#1e2d6e",
  tagBg: "#1a2a6e",
  tagText: "#7eb8ff",
};

const navItems = [
  { label: "Home", to: "/" },
  { label: "Events", to: "/events" },
  { label: "Contact", to: "/contact" },
];

export const FontStyles = () => (
  <link
    href="https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Inter:wght@300;400;500;600&display=swap"
    rel="stylesheet"
  />
);

export const GlowOrb = ({ x, y, color = COLORS.persian, size = 300 }) => (
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

export const Brand = () => (
  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
    <div
      style={{
        width: 32,
        height: 32,
        borderRadius: 8,
        background: `linear-gradient(135deg, ${COLORS.persian}, ${COLORS.accent})`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 16,
        fontWeight: 800,
        color: "#fff",
      }}
    >
      E
    </div>
    <span
      style={{
        fontFamily: "'Syne', sans-serif",
        fontWeight: 700,
        fontSize: 20,
        color: COLORS.white,
      }}
    >
      Event<span style={{ color: COLORS.persianLight }}>Ease</span>
    </span>
  </div>
);

export const SiteNav = ({ action }) => {
  const location = useLocation();

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "#0a0f2ccc",
        backdropFilter: "blur(20px)",
        borderBottom: `1px solid ${COLORS.cardBorder}`,
        padding: "0 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 64,
      }}
    >
      <Link to="/" style={{ textDecoration: "none" }}>
        <Brand />
      </Link>

      <div style={{ display: "flex", alignItems: "center", gap: 28, fontSize: 14 }}>
        {navItems.map((item) => {
          const active =
            item.to === "/"
              ? location.pathname === "/"
              : location.pathname.startsWith(item.to);

          return (
            <Link
              key={item.to}
              to={item.to}
              style={{
                color: active ? COLORS.persianLight : COLORS.muted,
                fontWeight: active ? 600 : 400,
                textDecoration: "none",
              }}
            >
              {item.label}
            </Link>
          );
        })}
      </div>

      {action || <div style={{ width: 124 }} />}
    </nav>
  );
};

export const PageShell = ({ children, orbs = [] }) => (
  <div
    style={{
      minHeight: "100vh",
      background: COLORS.navy,
      fontFamily: "'Inter', sans-serif",
      position: "relative",
      overflow: "hidden",
    }}
  >
    <FontStyles />
    {orbs.map((orb, index) => (
      <GlowOrb key={index} {...orb} />
    ))}
    {children}
  </div>
);

export const SectionTitle = ({ eyebrow, title, body, align = "left" }) => (
  <div style={{ marginBottom: 28, textAlign: align }}>
    {eyebrow && (
      <div
        style={{
          display: "inline-block",
          marginBottom: 16,
          padding: "5px 16px",
          borderRadius: 20,
          border: `1px solid ${COLORS.persianLight}44`,
          background: COLORS.persianGlow,
          fontSize: 13,
          color: COLORS.persianLight,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        {eyebrow}
      </div>
    )}
    <h1
      style={{
        fontFamily: "'Syne', sans-serif",
        fontWeight: 800,
        fontSize: "clamp(32px, 5vw, 56px)",
        margin: "0 0 16px",
        color: COLORS.white,
        lineHeight: 1.1,
        letterSpacing: "-0.02em",
      }}
    >
      {title}
    </h1>
    {body && (
      <p
        style={{
          fontSize: 17,
          color: COLORS.muted,
          margin: 0,
          maxWidth: align === "center" ? 680 : 560,
          marginInline: align === "center" ? "auto" : 0,
          lineHeight: 1.8,
        }}
      >
        {body}
      </p>
    )}
  </div>
);

export const PrimaryButton = ({ as: Component = "button", style, ...props }) => (
  <Component
    {...props}
    style={{
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      padding: "14px 22px",
      borderRadius: 12,
      border: "none",
      cursor: "pointer",
      fontSize: 15,
      fontWeight: 700,
      color: "#fff",
      textDecoration: "none",
      background: `linear-gradient(135deg, ${COLORS.persian}, ${COLORS.accent})`,
      boxShadow: `0 12px 36px ${COLORS.persian}33`,
      ...style,
    }}
  />
);

export const SecondaryButton = ({ as: Component = "button", style, ...props }) => (
  <Component
    {...props}
    style={{
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      padding: "14px 22px",
      borderRadius: 12,
      cursor: "pointer",
      fontSize: 15,
      fontWeight: 600,
      color: COLORS.white,
      textDecoration: "none",
      background: COLORS.cardBg,
      border: `1px solid ${COLORS.cardBorder}`,
      ...style,
    }}
  />
);

export const InfoCard = ({ children, style }) => (
  <div
    style={{
      background: COLORS.cardBg,
      border: `1px solid ${COLORS.cardBorder}`,
      borderRadius: 20,
      padding: 28,
      boxShadow: "0 20px 60px #00000035",
      ...style,
    }}
  >
    {children}
  </div>
);
