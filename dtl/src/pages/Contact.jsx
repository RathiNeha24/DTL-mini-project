import React from "react";
import { Link } from "react-router-dom";
import {
  COLORS,
  InfoCard,
  PageShell,
  PrimaryButton,
  SectionTitle,
  SiteNav,
} from "../theme";

const contactChannels = [
  {
    title: "General Queries",
    detail: "eventease@campus.edu",
    body: "For event discovery, website feedback, and general student support.",
  },
  {
    title: "Organizer Support",
    detail: "+91 98765 43210",
    body: "For publishing a new event, schedule updates, and organizer coordination.",
  },
  {
    title: "Visit Us",
    detail: "Student Activity Center, Block B",
    body: "Available Monday to Friday, 10:00 AM to 5:00 PM during the semester.",
  },
];

const faqs = [
  "How do I publish my club event on EventEase?",
  "Can I update venue or timing after publishing?",
  "Who should I contact for registration issues?",
];

const fieldStyle = {
  width: "100%",
  padding: "13px 15px",
  borderRadius: 12,
  background: COLORS.navyMid,
  border: `1px solid ${COLORS.cardBorder}`,
  color: COLORS.white,
  fontSize: 14,
  outline: "none",
  boxSizing: "border-box",
};

const Contact = () => {
  return (
    <PageShell
      orbs={[
        { x: "-120px", y: "60px", size: 500, color: COLORS.persian },
        { x: "62%", y: "180px", size: 420, color: COLORS.accent },
        { x: "12%", y: "980px", size: 320, color: "#6b21a8" },
      ]}
    >
      <SiteNav
        action={
          <PrimaryButton as={Link} to="/events" style={{ padding: "10px 18px", fontSize: 14 }}>
            View Events
          </PrimaryButton>
        }
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 1140, margin: "0 auto", padding: "70px 40px 90px" }}>
        <section style={{ display: "grid", gridTemplateColumns: "minmax(0, 0.95fr) minmax(320px, 1.05fr)", gap: 28, alignItems: "start", marginBottom: 64 }}>
          <div>
            <SectionTitle
              eyebrow="Contact EventEase"
              title="Need help with event discovery or coordination?"
              body="Reach out for publishing support, registration questions, or collaboration inquiries. The page is designed to feel consistent with the rest of EventEase while giving the team a more useful contact hub."
            />

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {contactChannels.map((item) => (
                <InfoCard key={item.title} style={{ padding: 22 }}>
                  <div style={{ color: COLORS.persianLight, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>
                    {item.title}
                  </div>
                  <div style={{ color: COLORS.white, fontSize: 20, fontWeight: 700, marginBottom: 8 }}>
                    {item.detail}
                  </div>
                  <p style={{ margin: 0, color: COLORS.muted, lineHeight: 1.7, fontSize: 14 }}>
                    {item.body}
                  </p>
                </InfoCard>
              ))}
            </div>
          </div>

          <InfoCard style={{ background: `linear-gradient(180deg, ${COLORS.cardBg} 0%, ${COLORS.navyMid} 100%)` }}>
            <div style={{ marginBottom: 22 }}>
              <div style={{ color: COLORS.persianLight, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>
                Send A Message
              </div>
              <h2 style={{ margin: 0, color: COLORS.white, fontFamily: "'Syne', sans-serif", fontSize: 28 }}>
                Contact the team
              </h2>
            </div>

            <form style={{ display: "grid", gap: 14 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                <input style={fieldStyle} type="text" placeholder="Your name" />
                <input style={fieldStyle} type="email" placeholder="Email address" />
              </div>
              <input style={fieldStyle} type="text" placeholder="Subject" />
              <textarea
                rows="6"
                style={{ ...fieldStyle, resize: "vertical", minHeight: 140 }}
                placeholder="Tell us how we can help..."
              />
              <PrimaryButton type="button" style={{ width: "100%", marginTop: 4 }}>
                Send Inquiry
              </PrimaryButton>
            </form>

            <p style={{ margin: "14px 0 0", color: COLORS.muted, fontSize: 12, textAlign: "center" }}>
              Demo-only contact form for the frontend project showcase.
            </p>
          </InfoCard>
        </section>

        <section style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(280px, 0.9fr)", gap: 24 }}>
          <InfoCard>
            <div style={{ color: COLORS.persianLight, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>
              Frequently Asked
            </div>
            <h2 style={{ margin: "0 0 18px", color: COLORS.white, fontFamily: "'Syne', sans-serif", fontSize: 28 }}>
              Common support questions
            </h2>
            <div style={{ display: "grid", gap: 14 }}>
              {faqs.map((faq) => (
                <div
                  key={faq}
                  style={{
                    padding: "16px 18px",
                    borderRadius: 14,
                    background: "#091137",
                    border: `1px solid ${COLORS.cardBorder}`,
                    color: COLORS.white,
                    fontSize: 15,
                  }}
                >
                  {faq}
                </div>
              ))}
            </div>
          </InfoCard>

          <InfoCard style={{ background: `linear-gradient(135deg, ${COLORS.cardBg} 0%, #101d5d 100%)` }}>
            <div style={{ color: COLORS.persianLight, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>
              Quick Action
            </div>
            <h2 style={{ margin: "0 0 10px", color: COLORS.white, fontFamily: "'Syne', sans-serif", fontSize: 28 }}>
              Want to browse current events instead?
            </h2>
            <p style={{ margin: "0 0 22px", color: COLORS.muted, lineHeight: 1.8, fontSize: 15 }}>
              Jump back into the events listing to explore what is currently open for registration.
            </p>
            <PrimaryButton as={Link} to="/events" style={{ width: "100%" }}>
              Go To Events Listing
            </PrimaryButton>
          </InfoCard>
        </section>
      </div>
    </PageShell>
  );
};

export default Contact;
