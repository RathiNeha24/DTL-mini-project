import { useState } from "react";
import { COLORS, PageShell, SiteNav } from "../theme";

const events = [
  {
    id: 1,
    title: "HackFest 2025",
    category: "Hackathon",
    date: "April 12, 2025",
    time: "9:00 AM",
    venue: "Main Auditorium",
    image: null,
    color: "#1a3aff",
    seats: 200,
    registered: 142,
    description:
      "36 hours of non-stop coding, collaboration, and creativity. Build projects that solve real-world problems. Mentors from top tech companies will guide you.",
    highlights: ["$10,000 in prizes", "Industry mentors", "Free food and swag", "Team size: 2-5"],
    organizer: "CS Department",
    tags: ["Coding", "Teams", "Prizes"],
  },
  {
    id: 2,
    title: "TechTalks Summit",
    category: "Conference",
    date: "April 18, 2025",
    time: "10:00 AM",
    venue: "Seminar Hall B",
    image: null,
    color: "#0066cc",
    seats: 300,
    registered: 210,
    description:
      "Annual technology conference featuring keynotes, panel discussions, and workshops covering AI, Web3, and Cloud Computing.",
    highlights: ["15+ speakers", "Networking lunch", "Certificate of attendance", "Live Q&A sessions"],
    organizer: "Tech Club",
    tags: ["AI", "Cloud", "Web3"],
  },
  {
    id: 3,
    title: "Designathon",
    category: "Design",
    date: "April 24, 2025",
    time: "11:00 AM",
    venue: "Innovation Lab",
    image: null,
    color: "#6b21a8",
    seats: 80,
    registered: 67,
    description:
      "A 24-hour design sprint where participants create stunning UI/UX prototypes for real-world problems. Judged by industry designers.",
    highlights: ["Figma licenses", "Design kit provided", "Industry judges", "Portfolio boost"],
    organizer: "Design Society",
    tags: ["UI/UX", "Figma", "Design"],
  },
  {
    id: 4,
    title: "CyberSec CTF",
    category: "Competition",
    date: "May 2, 2025",
    time: "8:00 AM",
    venue: "Lab Block 3",
    image: null,
    color: "#0e7c7b",
    seats: 120,
    registered: 55,
    description:
      "Capture The Flag competition testing your cybersecurity skills across forensics, cryptography, web exploitation, and reverse engineering.",
    highlights: ["Solo or pairs", "Beginner track", "Pro track", "Leaderboard prizes"],
    organizer: "InfoSec Club",
    tags: ["Security", "CTF", "Crypto"],
  },
  {
    id: 5,
    title: "Startup Pitch Night",
    category: "Entrepreneurship",
    date: "May 8, 2025",
    time: "5:00 PM",
    venue: "Conference Center",
    image: null,
    color: "#b45309",
    seats: 150,
    registered: 98,
    description:
      "Present your startup idea to a panel of investors and entrepreneurs. Get feedback, mentorship, and potential seed funding.",
    highlights: ["Angel investors panel", "Seed funding opportunity", "Networking dinner", "Media coverage"],
    organizer: "Entrepreneurship Cell",
    tags: ["Startup", "Funding", "Pitch"],
  },
  {
    id: 6,
    title: "AI Workshop Series",
    category: "Workshop",
    date: "May 15, 2025",
    time: "2:00 PM",
    venue: "Smart Classroom 1",
    image: null,
    color: "#1a3aff",
    seats: 60,
    registered: 60,
    description:
      "Hands-on workshop series covering Machine Learning fundamentals, neural networks, and building AI apps with Python and modern frameworks.",
    highlights: ["Hands-on projects", "GPU compute access", "Certificate", "Free resources"],
    organizer: "AI Research Lab",
    tags: ["ML", "Python", "Neural Nets"],
  },
];

const categoryColors = {
  Hackathon:"#1a3aff",Conference:"#0066cc",Design:"#6b21a8",
  Competition:"#0e7c7b",Entrepreneurship:"#b45309",Workshop:"#1a3aff",
};

const CategoryBadge = ({ cat }) => {
  const color = categoryColors[cat] || COLORS.persian;

  return (
    <span
      style={{
        display: "inline-block",
        padding: "3px 10px",
        borderRadius: 20,
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        background: color + "22",
        color: color === "#1a3aff" ? COLORS.persianLight : color,
        border: `1px solid ${color}44`,
      }}
    >
      {cat}
    </span>
  );
};

const Tag = ({ label }) => (
  <span
    style={{
      padding: "3px 10px",
      borderRadius: 20,
      fontSize: 12,
      background: COLORS.tagBg,
      color: COLORS.tagText,
      border: "1px solid #2a3a8e",
    }}
  >
    {label}
  </span>
);

const SeatBar = ({ registered, seats }) => {
  const pct = Math.min((registered / seats) * 100, 100);
  const full = registered >= seats;

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 12,
          color: COLORS.muted,
          marginBottom: 5,
        }}
      >
        <span>{full ? "Fully booked" : `${seats - registered} seats left`}</span>
        <span>
          {registered}/{seats}
        </span>
      </div>
      <div style={{ height: 4, borderRadius: 4, background: "#1e2d6e", overflow: "hidden" }}>
        <div
          style={{
            width: `${pct}%`,
            height: "100%",
            borderRadius: 4,
            background: full
              ? "#e24b4a"
              : `linear-gradient(90deg, ${COLORS.persian}, ${COLORS.accent})`,
            transition: "width 0.6s ease",
          }}
        />
      </div>
    </div>
  );
};

const EventCard = ({ event, onSelect }) => {
  const [hovered, setHovered] = useState(false);

  const full = event.registered >= event.seats; // ✅ ADD THIS

  const categorySymbol =
    event.category === "Hackathon"
      ? "</>"
      : event.category === "Conference"
      ? "CN"
      : event.category === "Design"
      ? "UX"
      : event.category === "Competition"
      ? "CTF"
      : event.category === "Entrepreneurship"
      ? "ST"
      : "AI";

  return (
    <div
      onClick={()=>onSelect(event)}
      onMouseEnter={()=>setHovered(true)}
      onMouseLeave={()=>setHovered(false)}
      style={{
        background: COLORS.cardBg,
        border: `1px solid ${hovered ? COLORS.persian : COLORS.cardBorder}`,
        borderRadius: 16,
        overflow: "hidden",
        cursor: "pointer",
        transition: "all 0.3s ease",
        transform: hovered ? "translateY(-4px)" : "none",
        boxShadow: hovered ? `0 12px 40px ${COLORS.persian}33` : "0 2px 8px #00000040",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <div
        style={{
          height: 6,
          background: `linear-gradient(90deg, ${event.color}, ${COLORS.accent})`,
        }}
      />

      <div
        style={{
          height: 160,
          background: `linear-gradient(135deg, ${event.color}22 0%, ${COLORS.navy} 100%)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(ellipse at 30% 50%, ${event.color}33 0%, transparent 60%)`,
          }}
        />
        <div style={{ textAlign: "center", zIndex: 1 }}>
          <div style={{ fontSize: 34, marginBottom: 4, color: COLORS.white, fontWeight: 700 }}>
            {categorySymbol}
          </div>
          <div
            style={{
              fontSize: 11,
              color: COLORS.muted,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            {event.organizer}
          </div>
        </div>
      </div>

      <div
        style={{
          padding: "16px 18px 18px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <CategoryBadge cat={event.category} />
          {full&&<span style={{ fontSize:11, color:"#e24b4a", fontWeight:700 }}>FULL</span>}
        </div>

        <div>
          <h3
            style={{
              margin: 0,
              fontSize: 18,
              fontWeight: 700,
              color: COLORS.white,
              lineHeight: 1.3,
              fontFamily: "'Syne', sans-serif",
            }}
          >
            {event.title}
          </h3>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 5, fontSize: 13, color: COLORS.muted }}>
          <span>{event.date} · {event.time}</span>
          <span>{event.venue}</span>
        </div>

        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 2 }}>
          {event.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>

        <div style={{ marginTop: "auto", paddingTop: 8 }}>
          <SeatBar registered={event.registered} seats={event.seats} />
        </div>
      </div>
    </div>
  );
};

const EventsListing = ({ onSelect }) => {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const categories = ["All", ...Array.from(new Set(events.map((event) => event.category)))];
  const filtered = events.filter(
    (event) =>
      (filter === "All" || event.category === filter) &&
      (event.title.toLowerCase().includes(search.toLowerCase()) ||
        event.category.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <PageShell
      orbs={[
        { x: "-100px", y: "-100px", size: 500 },
        { x: "60%", y: "200px", color: COLORS.accent, size: 400 },
        { x: "30%", y: "600px", color: "#6b21a8", size: 350 },
      ]}
    >
      <SiteNav />

      <div style={{ position: "relative", zIndex: 1, padding: "70px 40px 50px", maxWidth: 1100, margin: "0 auto" }}>
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
          }}
        >
          SPRING SEMESTER 2025
        </div>
        <h1
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(36px, 5vw, 58px)",
            margin: "0 0 16px",
            color: COLORS.white,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          Upcoming{" "}
          <span
            style={{
              background: `linear-gradient(135deg, ${COLORS.persianLight}, ${COLORS.accent})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Campus Events
          </span>
        </h1>
        <p style={{ fontSize: 17, color: COLORS.muted, margin: "0 0 40px", maxWidth: 520 }}>
          Discover hackathons, workshops, conferences, and competitions happening across campus.
        </p>

        <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
          <div style={{ position: "relative", flex: "1 1 260px" }}>
            <span
              style={{
                position: "absolute",
                left: 14,
                top: "50%",
                transform: "translateY(-50%)",
                color: COLORS.muted,
                fontSize: 16,
              }}
            >
              Search
            </span>
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search events..."
              style={{
                width: "100%",
                padding: "11px 16px 11px 74px",
                borderRadius: 10,
                background: COLORS.cardBg,
                border: `1px solid ${COLORS.cardBorder}`,
                color: COLORS.white,
                fontSize: 14,
                outline: "none",
                boxSizing: "border-box",
              }}
            />
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  padding: "9px 18px",
                  borderRadius: 10,
                  cursor: "pointer",
                  fontSize: 13,
                  fontWeight: 500,
                  border: `1px solid ${filter === cat ? COLORS.persian : COLORS.cardBorder}`,
                  background: filter === cat ? COLORS.persian : COLORS.cardBg,
                  color: filter === cat ? "#fff" : COLORS.muted,
                  transition: "all 0.2s",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ position: "relative", zIndex: 1, padding: "0 40px 80px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ marginBottom: 20, fontSize: 14, color: COLORS.muted }}>
          Showing <strong style={{ color: COLORS.white }}>{filtered.length}</strong> events
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 24 }}>
          {filtered.map((event) => (
            <EventCard key={event.id} event={event} onSelect={onSelect} />
          ))}
        </div>
        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "80px 0", color: COLORS.muted }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>0</div>
            <div style={{ fontSize: 18 }}>No events match your search</div>
          </div>
        )}
      </div>
    </PageShell>
  );
};

const EventDetails = ({ event, onBack }) => {
  const [registered, setRegistered] = useState(false);
  const [animating, setAnimating] = useState(false);
  const full = event.registered >= event.seats;

  const handleRegister = () => {
    if (full || registered) {
      return;
    }

    setAnimating(true);
    setTimeout(() => {
      setRegistered(true);
      setAnimating(false);
    }, 600);
  };

  return (
    <PageShell
      orbs={[
        { x: "-100px", y: "100px", color: event.color, size: 600 },
        { x: "50%", y: "400px", color: COLORS.accent, size: 400 },
      ]}
    >
      <SiteNav
        action={
          <button
            onClick={onBack}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 18px",
              borderRadius: 10,
              background: COLORS.cardBg,
              border: `1px solid ${COLORS.cardBorder}`,
              color: COLORS.muted,
              cursor: "pointer",
              fontSize: 14,
              fontWeight: 500,
            }}
          >
            Back to Events
          </button>
        }
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          height: 280,
          background: `linear-gradient(135deg, ${event.color}33 0%, ${COLORS.navyMid} 60%, ${COLORS.navy} 100%)`,
          display: "flex",
          alignItems: "center",
          borderBottom: `1px solid ${COLORS.cardBorder}`,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(ellipse at 20% 50%, ${event.color}44 0%, transparent 55%)`,
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 80,
            top: "50%",
            transform: "translateY(-50%)",
            opacity: 0.08,
            fontSize: 200,
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            color: "#fff",
            userSelect: "none",
            whiteSpace: "nowrap",
          }}
        >
          {event.category.toUpperCase()}
        </div>
        <div style={{ position: "relative", zIndex: 1, padding: "0 60px", maxWidth: 1100, margin: "0 auto", width: "100%" }}>
          <CategoryBadge cat={event.category} />
          <h1
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              margin: "14px 0 12px",
              fontSize: "clamp(28px, 4vw, 48px)",
              color: COLORS.white,
              lineHeight: 1.1,
            }}
          >
            {event.title}
          </h1>
          <div style={{ display: "flex", gap: 24, fontSize: 14, color: COLORS.muted, flexWrap: "wrap" }}>
            <span>{event.date} · {event.time}</span>
            <span>{event.venue}</span>
            <span>{event.organizer}</span>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1100,
          margin: "0 auto",
          padding: "50px 60px 80px",
          display: "grid",
          gridTemplateColumns: "1fr 340px",
          gap: 40,
          alignItems: "start",
        }}
      >
        <div>
          <section style={{ marginBottom: 40 }}>
            <h2
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: 22,
                color: COLORS.white,
                margin: "0 0 16px",
              }}
            >
              About This Event
            </h2>
            <p style={{ color: COLORS.muted, fontSize: 16, lineHeight: 1.8, margin: 0 }}>{event.description}</p>
          </section>

          <section style={{ marginBottom: 40 }}>
            <h2
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: 22,
                color: COLORS.white,
                margin: "0 0 20px",
              }}
            >
              Event Highlights
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              {event.highlights.map((highlight) => (
                <div
                  key={highlight}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "14px 18px",
                    borderRadius: 12,
                    background: COLORS.cardBg,
                    border: `1px solid ${COLORS.cardBorder}`,
                  }}
                >
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: `linear-gradient(135deg, ${event.color}, ${COLORS.accent})`,
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ color: COLORS.white, fontSize: 14, fontWeight: 500 }}>{highlight}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: 22,
                color: COLORS.white,
                margin: "0 0 16px",
              }}
            >
              Tags
            </h2>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {event.tags.map((tag) => (
                <Tag key={tag} label={tag} />
              ))}
            </div>
          </section>
        </div>

        <div style={{ position: "sticky", top: 80 }}>
          <div
            style={{
              background: COLORS.cardBg,
              border: `1px solid ${COLORS.cardBorder}`,
              borderRadius: 20,
              padding: 28,
              boxShadow: "0 20px 60px #00000060",
            }}
          >
            <div style={{ marginBottom: 24 }}>
              <div style={{ fontSize: 13, color: COLORS.muted, marginBottom: 8 }}>Registration</div>
              <div style={{ fontSize: 13, color: COLORS.muted, marginBottom: 14 }}>
                {event.registered} of {event.seats} spots filled
              </div>
              <SeatBar registered={event.registered} seats={event.seats} />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 24 }}>
              {[
                { label: "Date", val: event.date },
                { label: "Time", val: event.time },
                { label: "Venue", val: event.venue },
                { label: "Organizer", val: event.organizer },
              ].map((row) => (
                <div key={row.label} style={{ display: "flex", justifyContent: "space-between", fontSize: 14 }}>
                  <span style={{ color: COLORS.muted }}>{row.label}</span>
                  <span style={{ color: COLORS.white, fontWeight: 500, textAlign: "right", maxWidth: 180 }}>
                    {row.val}
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={handleRegister}
              disabled={full || registered}
              style={{
                width: "100%",
                padding: "15px 0",
                borderRadius: 12,
                border: "none",
                cursor: full || registered ? "default" : "pointer",
                fontSize: 15,
                fontWeight: 700,
                background: registered
                  ? "#0e7c7b"
                  : full
                  ? "#2a2a3a"
                  : `linear-gradient(135deg, ${COLORS.persian}, ${COLORS.accent})`,
                color: full && !registered ? COLORS.muted : "#fff",
                transition: "all 0.3s ease",
                transform: animating ? "scale(0.97)" : "scale(1)",
                letterSpacing: "0.03em",
              }}
            >
              {registered ? "Registered" : full ? "Event Full" : animating ? "Registering..." : "Register Now"}
            </button>

            {!full && !registered && (
              <p style={{ textAlign: "center", fontSize: 12, color: COLORS.muted, margin: "12px 0 0" }}>
                Free registration · Confirmation via email
              </p>
            )}
          </div>

          <div
            style={{
              marginTop: 14,
              padding: "16px 20px",
              borderRadius: 14,
              background: COLORS.cardBg,
              border: `1px solid ${COLORS.cardBorder}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              fontSize: 14,
            }}
          >
            <span style={{ color: COLORS.muted }}>Share this event</span>
            <div style={{ display: "flex", gap: 10 }}>
              {["X", "in", "Link"].map((share) => (
                <button
                  key={share}
                  style={{
                    minWidth: 34,
                    height: 34,
                    borderRadius: 8,
                    background: COLORS.navyMid,
                    border: `1px solid ${COLORS.cardBorder}`,
                    color: COLORS.white,
                    cursor: "pointer",
                    fontSize: 14,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0 10px",
                  }}
                >
                  {share}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
};

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return selectedEvent ? (
    <EventDetails event={selectedEvent} onBack={() => setSelectedEvent(null)} />
  ) : (
    <EventsListing onSelect={setSelectedEvent} />
  );
}
