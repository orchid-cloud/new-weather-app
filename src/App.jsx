import React from 'react';
import Weather from './Weather';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          <a
            href="https://github.com/orchid-cloud/new-weather-app.git"
            target="blank"
          >
            Git Hub
          </a>
        </footer>
      </div>
    </div>
  );
}
