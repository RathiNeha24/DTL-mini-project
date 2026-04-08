import { useState } from "react";
import Navbar from "../components/Navbar";
import { GlowOrb, CategoryBadge, Tag, SeatBar } from "../components/UI";
import { events } from "../data/events";
import { C, categoryColors } from "../theme";


const symbolMap = {
  Hackathon: "⟨/⟩", Conference: "◈", Design: "◉",
  Competition: "⛬", Entrepreneurship: "◆", Workshop: "∿",
};

function EventCard({ event, onSelect }) {
  const [hovered, setHovered] = useState(false);
  const full = event.registered >= event.seats;

  return (
    <div
      onClick={() => onSelect(event)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: C.cardBg,
        border: `1px solid ${hovered ? C.persian : C.cardBorder}`,
        borderRadius: 16,
        overflow: "hidden",
        cursor: "pointer",
        transition: "all 0.28s ease",
        transform: hovered ? "translateY(-5px)" : "none",
        boxShadow: hovered ? `0 14px 44px ${C.persian}33` : "0 2px 10px #00000045",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Top color stripe */}
      <div style={{ height: 5, background: `linear-gradient(90deg, ${event.color}, ${C.accent})` }} />

      {/* Visual header */}
      <div style={{
        height: 155,
        background: `linear-gradient(135deg, ${event.color}20 0%, ${C.navy} 100%)`,
        display: "flex", alignItems: "center", justifyContent: "center",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          background: `radial-gradient(ellipse at 30% 50%, ${event.color}30 0%, transparent 60%)`,
        }} />
        <div style={{ textAlign: "center", zIndex: 1 }}>
          <div style={{ fontSize: 38, color: C.white, marginBottom: 4 }}>
            {symbolMap[event.category] || "◌"}
          </div>
          <div style={{ fontSize: 11, color: C.muted, letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "'Inter', sans-serif" }}>
            {event.organizer}
          </div>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: "16px 18px 18px", flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <CategoryBadge cat={event.category} />
          {full && <span style={{ fontSize: 11, color: "#e24b4a", fontWeight: 700, letterSpacing: "0.05em" }}>FULL</span>}
        </div>

        <h3 style={{
          margin: 0, fontSize: 18, fontWeight: 700, color: C.white,
          lineHeight: 1.3, fontFamily: "'Syne', sans-serif",
        }}>{event.title}</h3>

        <div style={{ display: "flex", flexDirection: "column", gap: 5, fontSize: 13, color: C.muted, fontFamily: "'Inter', sans-serif" }}>
          <span>📅 {event.date} · {event.time}</span>
          <span>📍 {event.venue}</span>
        </div>

        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {event.tags.map((t) => <Tag key={t} label={t} />)}
        </div>

        <div style={{ marginTop: "auto", paddingTop: 8 }}>
          <SeatBar registered={event.registered} seats={event.seats} />
        </div>
      </div>
    </div>
  );
}

// ─── EventsListing Page ────────────────────────────────────────────
export default function EventsListing({ onSelectEvent }) {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const categories = ["All", ...Array.from(new Set(events.map((e) => e.category)))];
  const filtered = events.filter(
    (e) =>
      (filter === "All" || e.category === filter) &&
      (e.title.toLowerCase().includes(search.toLowerCase()) ||
        e.category.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div style={{ minHeight: "100vh", background: C.navy, fontFamily: "'Inter', sans-serif", position: "relative", overflow: "hidden" }}>
      <link href="https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />

      <GlowOrb x="-100px" y="-80px" size={500} />
      <GlowOrb x="62%" y="180px" color={C.accent} size={380} />
      <GlowOrb x="25%" y="650px" color="#6b21a8" size={320} />

      <Navbar onLogoClick={() => {}} />

      {/* Hero */}
      <div style={{ position: "relative", zIndex: 1, padding: "68px 40px 46px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{
          display: "inline-block", marginBottom: 16, padding: "5px 16px",
          borderRadius: 20, border: `1px solid ${C.persianLight}44`,
          background: C.persianGlow, fontSize: 13, color: C.persianLight,
          letterSpacing: "0.08em", fontFamily: "'Inter', sans-serif",
        }}>
          SPRING SEMESTER 2025
        </div>

        <h1 style={{
          fontFamily: "'Syne', sans-serif", fontWeight: 800, margin: "0 0 16px",
          fontSize: "clamp(36px, 5vw, 58px)", color: C.white,
          lineHeight: 1.1, letterSpacing: "-0.02em",
        }}>
          Upcoming{" "}
          <span style={{
            background: `linear-gradient(135deg, ${C.persianLight}, ${C.accent})`,
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>Campus Events</span>
        </h1>

        <p style={{ fontSize: 17, color: C.muted, margin: "0 0 40px", maxWidth: 520, lineHeight: 1.6 }}>
          Discover hackathons, workshops, conferences, and competitions happening across campus.
        </p>

        {/* Search + filters */}
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
          <div style={{ position: "relative", flex: "1 1 260px" }}>
            <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: C.muted, fontSize: 18 }}>
              ⌕
            </span>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search events..."
              style={{
                width: "100%", padding: "11px 16px 11px 42px", borderRadius: 10,
                background: C.cardBg, border: `1px solid ${C.cardBorder}`,
                color: C.white, fontSize: 14, outline: "none", boxSizing: "border-box",
                fontFamily: "'Inter', sans-serif",
              }}
            />
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  padding: "9px 18px", borderRadius: 10, cursor: "pointer",
                  fontSize: 13, fontWeight: 500, fontFamily: "'Inter', sans-serif",
                  border: `1px solid ${filter === cat ? C.persian : C.cardBorder}`,
                  background: filter === cat ? C.persian : C.cardBg,
                  color: filter === cat ? "#fff" : C.muted,
                  transition: "all 0.2s",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div style={{ position: "relative", zIndex: 1, padding: "0 40px 80px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ marginBottom: 20, fontSize: 14, color: C.muted, fontFamily: "'Inter', sans-serif" }}>
          Showing <strong style={{ color: C.white }}>{filtered.length}</strong> events
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 24 }}>
          {filtered.map((e) => (
            <EventCard key={e.id} event={e} onSelect={onSelectEvent} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "80px 0", color: C.muted }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>◌</div>
            <div style={{ fontSize: 18 }}>No events match your search</div>
          </div>
        )}
      </div>
    </div>
  );
}