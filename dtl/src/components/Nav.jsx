import { C } from "../theme";

 
export default function Navbar({ onLogoClick, rightSlot }) {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Inter:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "#0a0f2ccc",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: `1px solid ${C.cardBorder}`,
          padding: "0 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
          boxSizing: "border-box",
        }}
      >
        {/* Logo */}
        <div
          onClick={onLogoClick}
          style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}
        >
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: 9,
              background: `linear-gradient(135deg, ${C.persian}, ${C.accent})`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 17,
              fontWeight: 800,
              color: "#fff",
              fontFamily: "'Syne', sans-serif",
              flexShrink: 0,
            }}
          >
            E
          </div>
          <span
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: 20,
              color: C.white,
              letterSpacing: "-0.01em",
            }}
          >
            Event<span style={{ color: C.persianLight }}>Ease</span>
          </span>
        </div>
 
        {/* Center links */}
        <div style={{ display: "flex", gap: 32, fontSize: 14 }}>
          {["Home", "Events", "Contacts","Register"].map((link) => (
            <span
              key={link}
              onClick={link === "Events" ? onLogoClick : undefined}
              style={{
                color: link === "Events" ? C.persianLight : C.muted,
                fontWeight: link === "Events" ? 600 : 400,
                cursor: "pointer",
                transition: "color 0.2s",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              {link}
            </span>
          ))}
        </div>
 
        {/* Right slot */}
        <div style={{ minWidth: 120, display: "flex", justifyContent: "flex-end" }}>
          {rightSlot || <div />}
        </div>
      </nav>
    </>
  );
}