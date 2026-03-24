import React from "react";

const Achievements = () => {
  return (
    <section id="achievements" style={{ padding: "50px", color: "white" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
        Achievements
      </h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          background: "#1e293b",
          padding: "20px",
          borderRadius: "12px",
          alignItems: "center",
          maxWidth: "800px",
          margin: "auto",
        }}
      >
        <img
          src="/hackathon-certificate.jpg"
          alt="certificate"
          style={{ width: "220px", borderRadius: "10px" }}
        />

        <div>
          <h3>Code-A-Haunt Hackathon</h3>
          <p>
            Participated in a 24-hour hackathon organized by Coding Blocks at
            Lovely Professional University (LPU), showcasing coding and
            problem-solving skills.
          </p>
          <span style={{ color: "#94a3b8" }}>
            Feb 29 – Mar 1, 2024
          </span>
        </div>
      </div>
    </section>
  );
};

export default Achievements;