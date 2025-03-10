import React from "react";
import "./App.css";

function App() {
  // Function to make a call
  const callHospital = () => {
    window.location.href = "tel:+918826093251"; 
  };

  return (
    <div className="App">
      <h1>🚑 Ambulance Management System</h1>
      <p>In case of emergency, click the button below to call an ambulance.</p>
      <button className="call-btn" onClick={callHospital}>📞 Call Ambulance</button>
    </div>
  );
}

export default App;
