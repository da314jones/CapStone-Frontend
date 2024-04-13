import React, { useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const goToDashboard = () => {
    navigate("/dashboard");
  };
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="home-container">
        <div className="image-container">
          <img
            onClick={goToDashboard}
            src={"/home-image.jpg"}
            alt="Man Playing Piano"
            className="image"
          />
        </div>
        <div>
          <h2 className="home-header-title">
            Where Those Who Know Go to<span> Grow</span>
          </h2>

          <p>
            Explore clear, concise insights across any subject—from tech to art,
            math to fashion. Our site demystifies complex concepts and abstract
            ideas, making them accessible to all. Dive into our straightforward
            guides and unlock understanding in areas where clarity meets
            simplicity.
          </p>
          <button className="start-learning-button">Start Learning</button>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
