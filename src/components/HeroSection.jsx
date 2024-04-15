import React from 'react';
import { Link } from 'react-router-dom';
import restaurantFood from "../assets/images/restaurantfood.jpg";

const HeroSection = () => {
  return (
    <>
    <main className="main">
      <div className="main-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on
          traditional recipes served with a modern twist.
        </p>

        <Link to="/reservations">
          <button id="button" to="/reservations">
            Reserve a Table
          </button>
        </Link>
      </div>

      <div className="featured">
        <img src={restaurantFood} alt="restaurantFood" />
      </div>
    </main>
  </>
  )
}

export default HeroSection
