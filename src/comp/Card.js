import React from "react";
import "../App.css";
import "./Lunch.css";

export default function Card(props) {
  return (
    <div className="cardSection">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h4 style={{ margin: 0 }}>{props.title}</h4>
        <span>{props.price}</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "flex-end",
        }}
      >
        <p className="card-summery" style={{ flex: 1 }}>
          {props.summery}
        </p>
        {props.img && (
          <img
            src={props.img}
            alt={`Img of ${props.title}`}
            style={{
              alignSelf: "flex-start",
              maxWidth: "80%",
              marginTop: "auto",
            }}
          />
        )}
      </div>
    </div>
  );
}
