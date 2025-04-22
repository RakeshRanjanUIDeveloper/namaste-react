import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>About FoodDash</h1>
        <p>Your favorite meals, delivered fast at your door.</p>
      </section>

      <section className="about-content">
        <h2>Our Mission</h2>
        <p>
          At FoodDash, we're dedicated to bringing delicious food from your favorite restaurants straight to your doorstep. Whether it's biryani, burgers, or bubble tea — we’ve got you covered.
        </p>

        <h2>How It Works</h2>
        <ul>
          <li>Browse through thousands of restaurants near you</li>
          <li>Customize your order and pay securely online</li>
          <li>Track your delivery in real-time</li>
        </ul>

        <h2>Why Choose Us?</h2>
        <p>
          With a wide variety of cuisines, lightning-fast delivery, and top-rated customer service, FoodDash is your go-to app for satisfying your cravings anytime, anywhere.
        </p>
      </section>

      <section className="about-footer">
        <p>Made with ❤️ by the FoodDash team</p>
      </section>
    </div>
  );
};

export default About;
