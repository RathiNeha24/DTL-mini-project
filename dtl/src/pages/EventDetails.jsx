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
  Hackathon: "#1a3aff",
  Conference: "#0066cc",
  Design: "#6b21a8",
  Competition: "#0e7c7b",
  Entrepreneurship: "#b45309",
  Workshop: "#1a3aff",
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

  const full = event.registered >= event.seats;

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
      onClick={() => onSelect(event)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
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
          {full && <span style={{ fontSize: 11, color: "#e24b4a", fontWeight: 700 }}>FULL</span>}
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

const inputStyle = {
  width: "100%",
  padding: "12px 16px",
  borderRadius: 10,
  background: "#0a1035",
  border: `1px solid ${COLORS.cardBorder}`,
  color: COLORS.white,
  fontSize: 14,
  outline: "none",
  boxSizing: "border-box",
};

const labelStyle = {
  display: "block",
  fontSize: 13,
  fontWeight: 500,
  color: COLORS.muted,
  marginBottom: 7,
};

const Field = ({ label, error, children }) => (
  <div style={{ display: "flex", flexDirection: "column" }}>
    <label style={labelStyle}>{label}</label>
    {children}
    {error && <span style={{ fontSize: 12, color: "#e24b4a", marginTop: 5 }}>{error}</span>}
  </div>
);

const EventDetails = ({ event, onBack, onRegister }) => {
  const full = event.registered >= event.seats;

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
              onClick={() => !full && onRegister(event)}
              disabled={full}
              style={{
                width: "100%",
                padding: "15px 0",
                borderRadius: 12,
                border: "none",
                cursor: full ? "default" : "pointer",
                fontSize: 15,
                fontWeight: 700,
                background: full
                  ? "#2a2a3a"
                  : `linear-gradient(135deg, ${COLORS.persian}, ${COLORS.accent})`,
                color: full ? COLORS.muted : "#fff",
                transition: "all 0.3s ease",
                letterSpacing: "0.03em",
              }}
            >
              {full ? "Event Full" : "Register Now"}
            </button>

            {!full && (
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

function RegisterForm({ event, onBack, onHome }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    year: "",
    branch: "",
    teamName: "",
    teamSize: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [focused, setFocused] = useState(null);

  const setField = (key) => (e) => {
    setForm((prev) => ({
      ...prev,
      [key]: e.target.value,
    }));
  };

  const focusedStyle = (key) =>
    focused === key
      ? {
          borderColor: COLORS.persian,
        }
      : {};

  const validate = () => {
    const e = {};

    if (!form.name.trim()) e.name = "Full name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";

    if (!form.phone.trim()) e.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(form.phone.replace(/\D/g, ""))) e.phone = "Enter a 10-digit number";

    if (!form.college.trim()) e.college = "College name is required";
    if (!form.year) e.year = "Select your year";
    if (!form.branch.trim()) e.branch = "Branch/Department is required";

    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }

    setErrors({});
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  if (submitted) {
    return (
      <PageShell
        orbs={[
          { x: "10%", y: "10%", color: event.color, size: 500 },
          { x: "60%", y: "50%", color: COLORS.accent, size: 350 },
        ]}
      >
        <SiteNav />
        <div
          style={{
            minHeight: "calc(100vh - 64px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px 20px",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            style={{
              background: COLORS.cardBg,
              border: `1px solid ${COLORS.cardBorder}`,
              borderRadius: 24,
              padding: "60px 50px",
              maxWidth: 480,
              width: "100%",
              textAlign: "center",
              boxShadow: "0 30px 80px #00000060",
            }}
          >
            <div
              style={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                margin: "0 auto 28px",
                background: `linear-gradient(135deg, ${event.color}44, ${COLORS.accent}44)`,
                border: `2px solid ${COLORS.accent}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 32,
              }}
            >
              ✓
            </div>

            <h2
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize: 28,
                color: COLORS.white,
                margin: "0 0 12px",
              }}
            >
              You're registered!
            </h2>

            <p style={{ color: COLORS.muted, fontSize: 15, lineHeight: 1.7, margin: "0 0 6px" }}>
              Successfully registered for
            </p>

            <p
              style={{
                color: COLORS.persianLight,
                fontSize: 17,
                fontWeight: 600,
                margin: "0 0 28px",
                fontFamily: "'Syne', sans-serif",
              }}
            >
              {event.title}
            </p>

            <div
              style={{
                background: "#0a1035",
                borderRadius: 12,
                padding: "16px 20px",
                marginBottom: 28,
                textAlign: "left",
              }}
            >
              {[
                { label: "Date", val: event.date },
                { label: "Time", val: event.time },
                { label: "Venue", val: event.venue },
              ].map((row) => (
                <div
                  key={row.label}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: 14,
                    padding: "5px 0",
                    borderBottom: `1px solid ${COLORS.cardBorder}`,
                  }}
                >
                  <span style={{ color: COLORS.muted }}>{row.label}</span>
                  <span style={{ color: COLORS.white, fontWeight: 500 }}>{row.val}</span>
                </div>
              ))}
            </div>

            <p style={{ fontSize: 13, color: COLORS.muted, marginBottom: 28 }}>
              Confirmation sent to <strong style={{ color: COLORS.white }}>{form.email}</strong>
            </p>

            <div style={{ display: "flex", gap: 12 }}>
              <button
                onClick={onBack}
                style={{
                  flex: 1,
                  padding: "13px 0",
                  borderRadius: 10,
                  cursor: "pointer",
                  background: "transparent",
                  border: `1px solid ${COLORS.cardBorder}`,
                  color: COLORS.muted,
                  fontSize: 14,
                }}
              >
                ← Event Details
              </button>
              <button
                onClick={onHome}
                style={{
                  flex: 1,
                  padding: "13px 0",
                  borderRadius: 10,
                  cursor: "pointer",
                  background: `linear-gradient(135deg, ${COLORS.persian}, ${COLORS.accent})`,
                  border: "none",
                  color: "#fff",
                  fontSize: 14,
                  fontWeight: 600,
                }}
              >
                Browse Events →
              </button>
            </div>
          </div>
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell
      orbs={[
        { x: "-80px", y: "60px", color: event.color, size: 500 },
        { x: "65%", y: "300px", color: COLORS.accent, size: 380 },
        { x: "30%", y: "700px", color: COLORS.persian, size: 300 },
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
            }}
          >
            ← Back
          </button>
        }
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 720, margin: "0 auto", padding: "50px 40px 30px" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 20,
            padding: "8px 16px",
            borderRadius: 40,
            background: event.color + "18",
            border: `1px solid ${event.color}44`,
          }}
        >
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: event.color }} />
          <span style={{ fontSize: 13, color: event.color === "#1a3aff" ? COLORS.persianLight : event.color, fontWeight: 600 }}>
            {event.title}
          </span>
          <span style={{ color: COLORS.muted, fontSize: 13 }}>·</span>
          <span style={{ color: COLORS.muted, fontSize: 13 }}>{event.date}</span>
        </div>

        <h1
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            margin: "0 0 12px",
            fontSize: "clamp(28px, 4vw, 42px)",
            color: COLORS.white,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          Register for
          <br />
          <span
            style={{
              background: `linear-gradient(135deg, ${COLORS.persianLight}, ${COLORS.accent})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {event.title}
          </span>
        </h1>

        <p style={{ color: COLORS.muted, fontSize: 15, margin: 0 }}>
          Fill in your details below. All required fields must be completed.
        </p>
      </div>

      <div style={{ position: "relative", zIndex: 1, maxWidth: 720, margin: "0 auto", padding: "0 40px 80px" }}>
        <div
          style={{
            background: COLORS.cardBg,
            border: `1px solid ${COLORS.cardBorder}`,
            borderRadius: 20,
            overflow: "hidden",
            boxShadow: "0 20px 60px #00000050",
          }}
        >
          <div style={{ height: 5, background: `linear-gradient(90deg, ${event.color}, ${COLORS.accent})` }} />
          <div style={{ padding: "36px 36px 40px" }}>
            <div style={{ marginBottom: 32 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 22 }}>
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 8,
                    background: COLORS.persian + "33",
                    border: `1px solid ${COLORS.persian}55`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 13,
                  }}
                >
                  ①
                </div>
                <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 16, color: COLORS.white }}>
                  Personal Information
                </span>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
                <Field label="Full Name *" error={errors.name}>
                  <input
                    value={form.name}
                    onChange={setField("name")}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    placeholder="e.g. Rahul Sharma"
                    style={{ ...inputStyle, ...focusedStyle("name") }}
                  />
                </Field>

                <Field label="Email Address *" error={errors.email}>
                  <input
                    type="email"
                    value={form.email}
                    onChange={setField("email")}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    placeholder="you@college.edu"
                    style={{ ...inputStyle, ...focusedStyle("email") }}
                  />
                </Field>

                <Field label="Phone Number *" error={errors.phone}>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={setField("phone")}
                    onFocus={() => setFocused("phone")}
                    onBlur={() => setFocused(null)}
                    placeholder="10-digit mobile number"
                    style={{ ...inputStyle, ...focusedStyle("phone") }}
                  />
                </Field>

                <Field label="College / Institution *" error={errors.college}>
                  <input
                    value={form.college}
                    onChange={setField("college")}
                    onFocus={() => setFocused("college")}
                    onBlur={() => setFocused(null)}
                    placeholder="Your college name"
                    style={{ ...inputStyle, ...focusedStyle("college") }}
                  />
                </Field>
              </div>
            </div>

            <div style={{ borderTop: `1px solid ${COLORS.cardBorder}`, margin: "0 0 32px" }} />

            <div style={{ marginBottom: 32 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 22 }}>
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 8,
                    background: COLORS.persian + "33",
                    border: `1px solid ${COLORS.persian}55`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 13,
                  }}
                >
                  ②
                </div>
                <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 16, color: COLORS.white }}>
                  Academic Details
                </span>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
                <Field label="Year of Study *" error={errors.year}>
                  <select
                    value={form.year}
                    onChange={setField("year")}
                    onFocus={() => setFocused("year")}
                    onBlur={() => setFocused(null)}
                    style={{ ...inputStyle, ...focusedStyle("year"), cursor: "pointer" }}
                  >
                    <option value="">Select year</option>
                    {["1st Year", "2nd Year", "3rd Year", "4th Year", "Postgraduate"].map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="Branch / Department *" error={errors.branch}>
                  <input
                    value={form.branch}
                    onChange={setField("branch")}
                    onFocus={() => setFocused("branch")}
                    onBlur={() => setFocused(null)}
                    placeholder="e.g. Computer Engineering"
                    style={{ ...inputStyle, ...focusedStyle("branch") }}
                  />
                </Field>
              </div>
            </div>

            <div style={{ borderTop: `1px solid ${COLORS.cardBorder}`, margin: "0 0 32px" }} />

            <div style={{ marginBottom: 32 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 22 }}>
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 8,
                    background: COLORS.persian + "33",
                    border: `1px solid ${COLORS.persian}55`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 13,
                  }}
                >
                  ③
                </div>
                <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 16, color: COLORS.white }}>
                  Event Preferences
                </span>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginBottom: 18 }}>
                <Field label="Team Name (if applicable)">
                  <input
                    value={form.teamName}
                    onChange={setField("teamName")}
                    onFocus={() => setFocused("teamName")}
                    onBlur={() => setFocused(null)}
                    placeholder="Leave blank if solo"
                    style={{ ...inputStyle, ...focusedStyle("teamName") }}
                  />
                </Field>

                <Field label="Team Size">
                  <select
                    value={form.teamSize}
                    onChange={setField("teamSize")}
                    onFocus={() => setFocused("teamSize")}
                    onBlur={() => setFocused(null)}
                    style={{ ...inputStyle, ...focusedStyle("teamSize"), cursor: "pointer" }}
                  >
                    <option value="">Select size</option>
                    {["Solo (1)", "2 members", "3 members", "4 members", "5 members"].map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <Field label="Message / Special Requirements">
                <textarea
                  value={form.message}
                  onChange={setField("message")}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  placeholder="Dietary restrictions, accessibility needs, or questions..."
                  rows={4}
                  style={{ ...inputStyle, ...focusedStyle("message"), resize: "vertical", lineHeight: 1.6 }}
                />
              </Field>
            </div>

            <div
              style={{
                padding: "14px 18px",
                borderRadius: 10,
                background: "#0a1035",
                border: `1px solid ${COLORS.cardBorder}`,
                marginBottom: 28,
              }}
            >
              <p style={{ margin: 0, fontSize: 13, color: COLORS.muted, lineHeight: 1.6 }}>
                By registering, you agree to the event's terms and conditions and confirm the information is accurate.
              </p>
            </div>

            <button
              onClick={handleSubmit}
              style={{
                width: "100%",
                padding: "16px 0",
                borderRadius: 12,
                border: "none",
                cursor: "pointer",
                fontSize: 16,
                fontWeight: 700,
                letterSpacing: "0.03em",
                background: submitting
                  ? COLORS.cardBorder
                  : `linear-gradient(135deg, ${COLORS.persian}, ${COLORS.accent})`,
                color: "#fff",
                transition: "all 0.3s ease",
                transform: submitting ? "scale(0.99)" : "scale(1)",
              }}
            >
              {submitting ? "Submitting..." : "Complete Registration →"}
            </button>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

const PAGE = {
  LISTING: "LISTING",
  DETAILS: "DETAILS",
  REGISTER: "REGISTER",
};

export default function EventsPage() {
  const [page, setPage] = useState(PAGE.LISTING);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const goListing = () => {
    setSelectedEvent(null);
    setPage(PAGE.LISTING);
  };

  const goDetails = (event) => {
    setSelectedEvent(event);
    setPage(PAGE.DETAILS);
  };

  const goRegister = (event) => {
    setSelectedEvent(event);
    setPage(PAGE.REGISTER);
  };

  if (page === PAGE.LISTING) {
    return <EventsListing onSelect={goDetails} />;
  }

  if (page === PAGE.DETAILS) {
    return <EventDetails event={selectedEvent} onBack={goListing} onRegister={goRegister} />;
  }

  if (page === PAGE.REGISTER) {
    return <RegisterForm event={selectedEvent} onBack={() => goDetails(selectedEvent)} onHome={goListing} />;
  }

  return null;
}