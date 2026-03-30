 import React from "react";
import CourseGrid from "../Components/CourseGrid";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative overflow-hidden text-center py-16 px-6"
        style={{ background: "linear-gradient(135deg, #1a0533 0%, #2d1b69 40%, #0f2a6b 100%)" }}>

        {/* Glow Blobs */}
        <div className="absolute -top-24 -left-16 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(168,85,247,0.4) 0%, transparent 65%)" }} />
        <div className="absolute -bottom-20 -right-16 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.35) 0%, transparent 65%)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(236,72,153,0.15) 0%, transparent 70%)" }} />

        <div className="relative z-10 max-w-2xl mx-auto">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-5 py-2 rounded-full mb-6"
            style={{ background: "rgba(168,85,247,0.2)", border: "1px solid rgba(192,132,252,0.45)", color: "#d8b4fe" }}>
            🎓 25+ Premium Courses Available
          </span>

          {/* Heading */}
          <h1 className="text-5xl font-black text-white leading-tight mb-5">
            Learn Without{" "}
            <span style={{ background: "linear-gradient(90deg, #f0abfc, #818cf8, #38bdf8, #34d399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Limits
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-base mb-8 max-w-lg mx-auto" style={{ color: "#bfb8e8", lineHeight: 1.75 }}>
            Build real-world skills with top instructors. From web development to AI — find the course that launches your career.
          </p>

          {/* Category Pills */}
          <div className="flex justify-center gap-2 mb-10">
            {["Web Dev", "Data Science", "Mobile", "DevOps", "Design", "AI"].map((cat) => (
              <span key={cat}
                className="text-xs px-4 py-2 rounded-full cursor-pointer transition-all hover:bg-white/20"
                style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.18)", color: "#e0d9f5" }}>
                {cat}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex justify-center gap-4">
            <a href="#courses"
              className="inline-flex items-center gap-2 text-white font-bold text-sm px-7 py-3.5 rounded-xl transition-all hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg, #9333ea, #6366f1)", boxShadow: "0 0 0 1px rgba(147,51,234,0.6), 0 6px 28px rgba(99,102,241,0.45)" }}>
              <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              Explore Courses
            </a>
            <a href="#courses"
              className="inline-flex items-center gap-2 font-semibold text-sm px-7 py-3.5 rounded-xl transition-all hover:bg-white/20 hover:-translate-y-0.5"
              style={{ background: "rgba(255,255,255,0.1)", color: "#fff", border: "1.5px solid rgba(255,255,255,0.45)" }}>
              <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              View Bestsellers
            </a>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-5 flex justify-center divide-x divide-gray-200">
          {[
            { label: "Courses", value: "25+" },
            { label: "Students", value: "2L+" },
            { label: "Instructors", value: "12+" },
            { label: "Avg Rating", value: "4.8★" },
          ].map((stat) => (
            <div key={stat.label} className="text-center px-10">
              <div className="text-2xl font-extrabold text-violet-700">{stat.value}</div>
              <div className="text-xs text-gray-400 font-medium mt-1 uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Course Grid */}
      <div id="courses">
        <CourseGrid />
      </div>
    </div>
  );
};

export default Home;