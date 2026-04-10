import React from "react";
import { Link } from "react-router-dom";
import {
  COLORS,
  InfoCard,
  PageShell,
  PrimaryButton,
  SectionTitle,
  SecondaryButton,
  SiteNav,
} from "../theme";

const stats = [
  { value: "25+", label: "Campus events curated every semester" },
  { value: "8", label: "Student clubs actively hosting experiences" },
  { value: "1K+", label: "Registrations managed with a cleaner flow" },
];

const features = [
  {
    title: "Discover Faster",
    body: "Browse curated events by category, date, and interest without digging through scattered posters or group chats.",
  },
  {
    title: "Register Smoothly",
    body: "Guide students from first click to confirmation with a simple, high-clarity registration experience.",
  },
  {
    title: "Stay In Sync",
    body: "Keep listings, contact, and event details visually consistent so every page feels like the same product.",
  },
];

const spotlightEvents = [
  { title: "HackFest 2025", meta: "Hackathon  ·  April 12", accent: "#1a3aff" },
  { title: "TechTalks Summit", meta: "Conference  ·  April 18", accent: "#00d4ff" },
  { title: "Designathon", meta: "Design Sprint  ·  April 24", accent: "#6b21a8" },
];

const Home = () => {
  return (
    <PageShell
      orbs={[
        { x: "-120px", y: "-80px", size: 540 },
        { x: "58%", y: "140px", color: COLORS.accent, size: 420 },
        { x: "24%", y: "760px", color: "#6b21a8", size: 340 },
      ]}
    >
      <SiteNav
        action={
          <PrimaryButton as={Link} to="/events" style={{ padding: "10px 18px", fontSize: 14 }}>
            Explore Events
          </PrimaryButton>
        }
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 1140, margin: "0 auto", padding: "70px 40px 90px" }}>
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.1fr) minmax(320px, 0.9fr)",
            gap: 28,
            alignItems: "center",
            marginBottom: 72,
          }}
        >
          <div>
            <SectionTitle
              eyebrow="Campus Event Platform"
              title={
                <>
                  One polished place for
                  <span
                    style={{
                      background: `linear-gradient(135deg, ${COLORS.persianLight}, ${COLORS.accent})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {" "}discovering events
                  </span>
                </>
              }
              body="EventEase brings listings, details, and registration together in a focused student experience that feels modern, fast, and easy to trust."
            />

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 32 }}>
              <PrimaryButton as={Link} to="/events">
                Browse Events
              </PrimaryButton>
              <SecondaryButton as={Link} to="/contact">
                Contact Team
              </SecondaryButton>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))", gap: 14 }}>
              {stats.map((stat) => (
                <InfoCard key={stat.label} style={{ padding: 20 }}>
                  <div style={{ fontSize: 30, fontWeight: 800, color: COLORS.white, fontFamily: "'Syne', sans-serif" }}>
                    {stat.value}
                  </div>
                  <div style={{ color: COLORS.muted, fontSize: 13, lineHeight: 1.7 }}>{stat.label}</div>
                </InfoCard>
              ))}
            </div>
          </div>

          <InfoCard
            style={{
              padding: 0,
              overflow: "hidden",
              background: `linear-gradient(180deg, ${COLORS.cardBg} 0%, ${COLORS.navyMid} 100%)`,
            }}
          >
            <div
              style={{
                padding: "26px 26px 18px",
                borderBottom: `1px solid ${COLORS.cardBorder}`,
                background: `linear-gradient(135deg, ${COLORS.persianGlow} 0%, ${COLORS.accentSoft} 100%)`,
              }}
            >
              <div style={{ color: COLORS.persianLight, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>
                Featured This Month
              </div>
              <h2 style={{ margin: 0, color: COLORS.white, fontFamily: "'Syne', sans-serif", fontSize: 28 }}>
                Event lineup preview
              </h2>
            </div>

            <div style={{ padding: 22, display: "flex", flexDirection: "column", gap: 14 }}>
              {spotlightEvents.map((event) => (
                <div
                  key={event.title}
                  style={{
                    padding: 18,
                    borderRadius: 16,
                    background: "#091137",
                    border: `1px solid ${COLORS.cardBorder}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 16,
                  }}
                >
                  <div>
                    <div style={{ color: COLORS.white, fontSize: 17, fontWeight: 700 }}>{event.title}</div>
                    <div style={{ color: COLORS.muted, fontSize: 13, marginTop: 6 }}>{event.meta}</div>
                  </div>
                  <div
                    style={{
                      width: 46,
                      height: 46,
                      borderRadius: 14,
                      background: `${event.accent}22`,
                      border: `1px solid ${event.accent}55`,
                      boxShadow: `0 0 28px ${event.accent}22 inset`,
                    }}
                  />
                </div>
              ))}
            </div>
          </InfoCard>
        </section>

        <section style={{ marginBottom: 72 }}>
          <SectionTitle
            eyebrow="Why EventEase"
            title="Built for a cleaner college event experience"
            body="The interface keeps information dense enough to be useful, but polished enough to feel intentional on every screen size."
          />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            {features.map((feature, index) => (
              <InfoCard key={feature.title}>
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 12,
                    background: index === 1 ? COLORS.accentSoft : COLORS.persianGlow,
                    border: `1px solid ${COLORS.cardBorder}`,
                    color: COLORS.white,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    marginBottom: 18,
                  }}
                >
                  0{index + 1}
                </div>
                <h3 style={{ margin: "0 0 12px", color: COLORS.white, fontFamily: "'Syne', sans-serif", fontSize: 22 }}>
                  {feature.title}
                </h3>
                <p style={{ margin: 0, color: COLORS.muted, lineHeight: 1.8, fontSize: 15 }}>
                  {feature.body}
                </p>
              </InfoCard>
            ))}
          </div>
        </section>

        <section>
          <InfoCard
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1fr) auto",
              gap: 24,
              alignItems: "center",
              background: `linear-gradient(135deg, ${COLORS.cardBg} 0%, #101d5d 100%)`,
            }}
          >
            <div>
              <div style={{ color: COLORS.persianLight, fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>
                Team Collaboration Focus
              </div>
              <h2 style={{ margin: "0 0 10px", color: COLORS.white, fontFamily: "'Syne', sans-serif", fontSize: 30 }}>
                Modular pages. Shared style. Cleaner GitHub teamwork.
              </h2>
              <p style={{ margin: 0, color: COLORS.muted, fontSize: 15, lineHeight: 1.8, maxWidth: 620 }}>
                This structure keeps each contributor focused on clear page ownership while still preserving one visual system across the whole project.
              </p>
            </div>

            <PrimaryButton as={Link} to="/contact">
              Talk To Organizers
            </PrimaryButton>
          </InfoCard>
        </section>
      </div>
    </PageShell>
  );
};

export default Home;
