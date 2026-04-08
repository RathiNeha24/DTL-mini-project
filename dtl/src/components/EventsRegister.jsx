import { useState } from "react";
import Navbar from "../components/Navbar";
import { GlowOrb } from "../components/UI";
import { C } from "../theme";
 
// ─── RegisterForm Page ─────────────────────────────────────────────
// Props:
//   event       → event object
//   onBack      → () => void  goes back to EventDetails
//   onHome      → () => void  goes to EventsListing
 
const inputStyle = {
  width: "100%",
  padding: "12px 16px",
  borderRadius: 10,
  background: "#0a1035",
  border: `1px solid ${C.cardBorder}`,
  color: C.white,
  fontSize: 14,
  outline: "none",
  boxSizing: "border-box",
  fontFamily: "'Inter', sans-serif",
  transition: "border-color 0.2s",
};
 
const labelStyle = {
  display: "block",
  fontSize: 13,
  fontWeight: 500,
  color: C.muted,
  marginBottom: 7,
  fontFamily: "'Inter', sans-serif",
  letterSpacing: "0.02em",
};
 
const Field = ({ label, error, children }) => (
  <div style={{ display: "flex", flexDirection: "column" }}>
    <label style={labelStyle}>{label}</label>
    {children}
    {error && (
      <span style={{ fontSize: 12, color: "#e24b4a", marginTop: 5, fontFamily: "'Inter', sans-serif" }}>
        {error}
      </span>
    )}
  </div>
);
 
export default function RegisterForm({ event, onBack, onHome }) {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", college: "",
    year: "", branch: "", teamName: "", teamSize: "", message: "",
  });
  const [errors, setErrors] = useState({});
  const [focused, setFocused] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
 
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
 
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
    if (Object.keys(e).length) { setErrors(e); return; }
    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); setSubmitted(true); }, 1200);
  };
 
  const focusStyle = (key) =>
    focused === key ? { borderColor: C.persian } : {};
 
  if (submitted) {
    return (
      <div style={{ minHeight: "100vh", background: C.navy, fontFamily: "'Inter', sans-serif", position: "relative", overflow: "hidden" }}>
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <GlowOrb x="10%" y="10%" color={event.color} size={500} />
        <GlowOrb x="60%" y="50%" color={C.accent} size={350} />
 
        <Navbar onLogoClick={onHome} />
 
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "calc(100vh - 64px)", padding: "40px 20px", position: "relative", zIndex: 1 }}>
          <div style={{
            background: C.cardBg, border: `1px solid ${C.cardBorder}`,
            borderRadius: 24, padding: "60px 50px", maxWidth: 480, width: "100%",
            textAlign: "center", boxShadow: `0 30px 80px #00000060`,
          }}>
            {/* Success ring */}
            <div style={{
              width: 80, height: 80, borderRadius: "50%", margin: "0 auto 28px",
              background: `linear-gradient(135deg, ${event.color}44, ${C.accent}44)`,
              border: `2px solid ${C.accent}`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 32,
            }}>✓</div>
 
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 28, color: C.white, margin: "0 0 12px" }}>
              You're registered!
            </h2>
            <p style={{ color: C.muted, fontSize: 15, lineHeight: 1.7, margin: "0 0 8px" }}>
              Successfully registered for
            </p>
            <p style={{ color: C.persianLight, fontSize: 17, fontWeight: 600, margin: "0 0 28px", fontFamily: "'Syne', sans-serif" }}>
              {event.title}
            </p>
 
            <div style={{
              background: "#0a1035", borderRadius: 12, padding: "16px 20px",
              marginBottom: 32, textAlign: "left",
            }}>
              {[
                { label: "Date", val: event.date },
                { label: "Time", val: event.time },
                { label: "Venue", val: event.venue },
              ].map((r) => (
                <div key={r.label} style={{ display: "flex", justifyContent: "space-between", fontSize: 14, padding: "5px 0", borderBottom: `1px solid ${C.cardBorder}` }}>
                  <span style={{ color: C.muted }}>{r.label}</span>
                  <span style={{ color: C.white, fontWeight: 500 }}>{r.val}</span>
                </div>
              ))}
            </div>
 
            <p style={{ fontSize: 13, color: C.muted, marginBottom: 28 }}>
              A confirmation has been sent to <strong style={{ color: C.white }}>{form.email}</strong>
            </p>
 
            <div style={{ display: "flex", gap: 12 }}>
              <button
                onClick={onBack}
                style={{
                  flex: 1, padding: "13px 0", borderRadius: 10, cursor: "pointer",
                  background: "transparent", border: `1px solid ${C.cardBorder}`,
                  color: C.muted, fontSize: 14, fontFamily: "'Inter', sans-serif",
                }}
              >
                ← Event Details
              </button>
              <button
                onClick={onHome}
                style={{
                  flex: 1, padding: "13px 0", borderRadius: 10, cursor: "pointer",
                  background: `linear-gradient(135deg, ${C.persian}, ${C.accent})`,
                  border: "none", color: "#fff", fontSize: 14, fontWeight: 600,
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Browse Events →
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
 
  return (
    <div style={{ minHeight: "100vh", background: C.navy, fontFamily: "'Inter', sans-serif", position: "relative", overflow: "hidden" }}>
      <link href="https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
 
      <GlowOrb x="-80px" y="60px" color={event.color} size={500} />
      <GlowOrb x="65%" y="300px" color={C.accent} size={380} />
      <GlowOrb x="30%" y="700px" color={C.persian} size={300} />
 
      <Navbar
        onLogoClick={onHome}
        rightSlot={
          <button
            onClick={onBack}
            style={{
              display: "flex", alignItems: "center", gap: 8,
              padding: "8px 18px", borderRadius: 10,
              background: C.cardBg, border: `1px solid ${C.cardBorder}`,
              color: C.muted, cursor: "pointer", fontSize: 14,
              fontFamily: "'Inter', sans-serif",
            }}
          >
            ← Back
          </button>
        }
      />
 
      {/* Page header */}
      <div style={{
        position: "relative", zIndex: 1,
        maxWidth: 720, margin: "0 auto", padding: "50px 40px 30px",
      }}>
        {/* Event pill */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 20,
          padding: "8px 16px", borderRadius: 40,
          background: event.color + "18", border: `1px solid ${event.color}44`,
        }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: event.color }} />
          <span style={{ fontSize: 13, color: event.color === "#1a3aff" ? C.persianLight : event.color, fontWeight: 600 }}>
            {event.title}
          </span>
          <span style={{ color: C.muted, fontSize: 13 }}>·</span>
          <span style={{ color: C.muted, fontSize: 13 }}>{event.date}</span>
        </div>
 
        <h1 style={{
          fontFamily: "'Syne', sans-serif", fontWeight: 800, margin: "0 0 12px",
          fontSize: "clamp(28px, 4vw, 42px)", color: C.white, lineHeight: 1.1, letterSpacing: "-0.02em",
        }}>
          Register for <br />
          <span style={{
            background: `linear-gradient(135deg, ${C.persianLight}, ${C.accent})`,
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>{event.title}</span>
        </h1>
        <p style={{ color: C.muted, fontSize: 15, margin: 0 }}>
          Fill in your details below. All fields marked are required.
        </p>
      </div>
 
      {/* Form card */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: 720, margin: "0 auto", padding: "0 40px 80px" }}>
        <div style={{
          background: C.cardBg, border: `1px solid ${C.cardBorder}`,
          borderRadius: 20, overflow: "hidden",
          boxShadow: "0 20px 60px #00000050",
        }}>
 
          {/* Top color strip */}
          <div style={{ height: 5, background: `linear-gradient(90deg, ${event.color}, ${C.accent})` }} />
 
          <div style={{ padding: "36px 36px 40px" }}>
 
            {/* Section: Personal Info */}
            <div style={{ marginBottom: 32 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 22 }}>
                <div style={{ width: 28, height: 28, borderRadius: 8, background: C.persian + "33", border: `1px solid ${C.persian}55`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13 }}>①</div>
                <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 16, color: C.white }}>Personal Information</span>
              </div>
 
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
                <Field label="Full Name *" error={errors.name}>
                  <input
                    value={form.name} onChange={set("name")}
                    onFocus={() => setFocused("name")} onBlur={() => setFocused(null)}
                    placeholder="e.g. Rahul Sharma"
                    style={{ ...inputStyle, ...focusStyle("name") }}
                  />
                </Field>
                <Field label="Email Address *" error={errors.email}>
                  <input
                    type="email" value={form.email} onChange={set("email")}
                    onFocus={() => setFocused("email")} onBlur={() => setFocused(null)}
                    placeholder="you@college.edu"
                    style={{ ...inputStyle, ...focusStyle("email") }}
                  />
                </Field>
                <Field label="Phone Number *" error={errors.phone}>
                  <input
                    type="tel" value={form.phone} onChange={set("phone")}
                    onFocus={() => setFocused("phone")} onBlur={() => setFocused(null)}
                    placeholder="10-digit mobile number"
                    style={{ ...inputStyle, ...focusStyle("phone") }}
                  />
                </Field>
                <Field label="College / Institution *" error={errors.college}>
                  <input
                    value={form.college} onChange={set("college")}
                    onFocus={() => setFocused("college")} onBlur={() => setFocused(null)}
                    placeholder="Your college name"
                    style={{ ...inputStyle, ...focusStyle("college") }}
                  />
                </Field>
              </div>
            </div>
 
            {/* Divider */}
            <div style={{ borderTop: `1px solid ${C.cardBorder}`, margin: "0 0 32px" }} />
 
            {/* Section: Academic Info */}
            <div style={{ marginBottom: 32 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 22 }}>
                <div style={{ width: 28, height: 28, borderRadius: 8, background: C.persian + "33", border: `1px solid ${C.persian}55`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13 }}>②</div>
                <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 16, color: C.white }}>Academic Details</span>
              </div>
 
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
                <Field label="Year of Study *" error={errors.year}>
                  <select
                    value={form.year} onChange={set("year")}
                    onFocus={() => setFocused("year")} onBlur={() => setFocused(null)}
                    style={{ ...inputStyle, ...focusStyle("year"), cursor: "pointer" }}
                  >
                    <option value="">Select year</option>
                    {["1st Year", "2nd Year", "3rd Year", "4th Year", "Postgraduate"].map((y) => (
                      <option key={y} value={y}>{y}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Branch / Department *" error={errors.branch}>
                  <input
                    value={form.branch} onChange={set("branch")}
                    onFocus={() => setFocused("branch")} onBlur={() => setFocused(null)}
                    placeholder="e.g. Computer Engineering"
                    style={{ ...inputStyle, ...focusStyle("branch") }}
                  />
                </Field>
              </div>
            </div>
 
            {/* Divider */}
            <div style={{ borderTop: `1px solid ${C.cardBorder}`, margin: "0 0 32px" }} />
 
            {/* Section: Event-specific */}
            <div style={{ marginBottom: 32 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 22 }}>
                <div style={{ width: 28, height: 28, borderRadius: 8, background: C.persian + "33", border: `1px solid ${C.persian}55`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13 }}>③</div>
                <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 16, color: C.white }}>Event Preferences</span>
              </div>
 
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginBottom: 18 }}>
                <Field label="Team Name (if applicable)">
                  <input
                    value={form.teamName} onChange={set("teamName")}
                    onFocus={() => setFocused("teamName")} onBlur={() => setFocused(null)}
                    placeholder="Leave blank if solo"
                    style={{ ...inputStyle, ...focusStyle("teamName") }}
                  />
                </Field>
                <Field label="Team Size">
                  <select
                    value={form.teamSize} onChange={set("teamSize")}
                    onFocus={() => setFocused("teamSize")} onBlur={() => setFocused(null)}
                    style={{ ...inputStyle, ...focusStyle("teamSize"), cursor: "pointer" }}
                  >
                    <option value="">Select size</option>
                    {["Solo (1)", "2 members", "3 members", "4 members", "5 members"].map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </Field>
              </div>
 
              <Field label="Message / Special Requirements">
                <textarea
                  value={form.message} onChange={set("message")}
                  onFocus={() => setFocused("message")} onBlur={() => setFocused(null)}
                  placeholder="Any dietary restrictions, accessibility needs, or questions for the organizers..."
                  rows={4}
                  style={{ ...inputStyle, ...focusStyle("message"), resize: "vertical", lineHeight: 1.6 }}
                />
              </Field>
            </div>
 
            {/* Terms */}
            <div style={{
              padding: "14px 18px", borderRadius: 10,
              background: "#0a1035", border: `1px solid ${C.cardBorder}`,
              marginBottom: 28,
            }}>
              <p style={{ margin: 0, fontSize: 13, color: C.muted, lineHeight: 1.6 }}>
                By registering, you agree to the event's{" "}
                <span style={{ color: C.persianLight, cursor: "pointer" }}>terms & conditions</span>{" "}
                and confirm that the information provided is accurate.
              </p>
            </div>
 
            {/* Submit */}
            <button
              onClick={handleSubmit}
              style={{
                width: "100%", padding: "16px 0",
                borderRadius: 12, border: "none", cursor: "pointer",
                fontSize: 16, fontWeight: 700, letterSpacing: "0.03em",
                background: submitting
                  ? C.cardBorder
                  : `linear-gradient(135deg, ${C.persian}, ${C.accent})`,
                color: "#fff", fontFamily: "'Syne', sans-serif",
                transition: "all 0.3s ease",
                transform: submitting ? "scale(0.99)" : "scale(1)",
              }}
            >
              {submitting ? "Submitting..." : "Complete Registration →"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}