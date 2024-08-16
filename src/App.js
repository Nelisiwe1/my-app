import React from 'react';
import Header from './Components/Header';

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="home">
          <h1>Home</h1>
          <p>Welcome to the Home Page</p>
        </section>
        <section id="about">
          <h1>About</h1>
          <p>About Us Page</p>
        </section>
        <section id="services">
          <h1>Services</h1>
          <p>Our Services</p>
        </section>
        <section id="contact">
          <h1>Contact</h1>
          <p>Contact Us</p>
        </section>
      </main>
    </div>
  );
}

export default App;
