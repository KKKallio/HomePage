import React from 'react';
import { Link } from 'react-router-dom';
import ContactIcons from '../Contact/ContactIcons';
import Intro from '../Intro/Intro';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/Profile.jpg`} alt="" />
      </Link>
      <header>
        <h2>Ke Liu / Kallio</h2>
      </header>
      <p>
        Hello! Welcome to my page!
      </p>
      <Intro id="intro" />
    </section>
    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Kallio 2025
      </p>
    </section>
  </section>
);

export default SideBar;
