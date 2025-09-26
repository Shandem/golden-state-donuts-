import React from "react";
import sandwitch from "./SandwitchData";
import Card from "./Card";
import "./Lunch.css"; // <-- Import your CSS file

export default function Lunch() {
  return (
    <div style={{ height: "100vh", position: "relative" }}>
      <section>
        <div>
          <h2>Brakefast</h2>
          <p>Eggs Cheese</p>
        </div>
        <div>
          <h2>Lunch</h2>
          <p>Lettuce Tomato Onion Cheese</p>
        </div>
      </section>

      <div className="lunch-card-grid">
        {Array.from({ length: 10 }).map((_, i) => (
          <div className="lunch-card" key={i}>
            {sandwitch[i] && <Card {...sandwitch[i]} />}
          </div>
        ))}
      </div>
    </div>
  );
}
