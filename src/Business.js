import React, { useState } from "react";
import "./Business.css";

import profile1 from "./profile.jpeg";
import profile2 from "./Profile1.jpeg"; 

function Business() {
  const [darkMode, setDarkMode] = useState(false);

  // Image slider state
  const images = [profile1, profile2];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);

  // Swipe handlers
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (!touchStart) return;

    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (diff > 50) {
      // swipe left → next image
      setCurrentIndex((prev) => (prev + 1) % images.length);
    } else if (diff < -50) {
      // swipe right → previous image
      setCurrentIndex((prev) =>
        prev === 0 ? images.length - 1 : prev - 1
      );
    }

    setTouchStart(null);
  };

  return (
    <div className={darkMode ? "outer-bg dark" : "outer-bg"}>
      <div className="border-box">
        <div className="inner-card">
          {/* Left: Profile Image */}
          <div
            className="card-left"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onClick={() =>
              setCurrentIndex((prev) => (prev + 1) % images.length)
            }
          >
            <img
              src={images[currentIndex]}
              alt="Profile"
              className="profile-pic"
            />
          </div>

          {/* Right: Information */}
          <div className="card-right">
            <h1 className="name">DETAILS</h1>

            <div className="contact-row">
              <span className="icon">👤</span>
              <span className="contact-text">Adrija Ghosh</span>
            </div>

            <div className="contact-row">
              <span className="icon">📞</span>
              <span className="contact-text">9874268358</span>
            </div>

            <div className="contact-row">
              <span className="icon">📧</span>
              <span className="contact-text">
                <a
                  href="mailto:adrijaghosh208@gmail.com"
                  className="email-link"
                >
                  adrijaghosh208@gmail.com
                </a>
              </span>
            </div>

            <button className="dark-btn" onClick={() => setDarkMode(!darkMode)}>
              Toggle Dark Mode
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Business;