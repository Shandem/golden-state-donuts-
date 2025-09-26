import "./App.css";
import Card from "./comp/Card";
import data from "./comp/Data";
import Lunch from "./comp/Lunch";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <div className="container">
                {/* 15 surrounding cards */}
                {Array.from({ length: 16 }).map((_, i) => (
                  <div className={`card card-pos-${i + 1}`} key={i}>
                    {data[i] && <Card {...data[i]} />}
                  </div>
                ))}
                {/* Central card */}

                <div className="central-card">
                  <div>
                    <img
                      src="test"
                      alt="Central card logo"
                      id="central-card-image"
                    />

                    <div className="group-price-wrapper">
                      <div className=" Price-Wrapper">
                        <h3>
                          Mix & match <br /> 6 Donuts{" "}
                        </h3>
                        <div>$10.00</div>
                      </div>

                      <div className="Price-Wrapper">
                        <h3>
                          Mix & Match <br /> 12 Donuts
                        </h3>
                        <div>$20.00</div>
                      </div>
                    </div>

                    <p className="address">
                      <span className="address-text">
                        6 sixth St. San Francisco, CA{"    "}
                      </span>
                      <span>
                        {"    "}(415) 488-8351{"    "}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          }
        />
        <Route path="/lunch" element={<Lunch />} />
      </Routes>
    </Router>
  );
}

export default App;
