import React, { useEffect } from "react";
import './App.css';

function App() {

  const [data, setData] = React.useState([])

  useEffect(() => {
    fetch("https://cyf-bazmurphy-cityguide.herokuapp.com")
  })

  return (
    <div className="app-container">
      <h1 className="heading">Mini Guide Client</h1>
      <div className="city-select-container">
        <label for="city" className="city-label">Choose A City:</label>
        <select name="cities" id="city" className="city-select">
          <option value="">Select A City</option>
          <option value="stratford">Stratford</option>
          <option value="heathrow">Heathrow</option>
          <option value="harrow">Harrow</option>
        </select>
      </div>
      <div className="category-buttons-container">
        <button className="category-button">Pharmacies</button>
        <button className="category-button">Colleges</button>
        <button className="category-button">Hospitals</button>
        <button className="category-button">Doctors</button>
      </div>
      <div className="data-container">

      </div>
    </div>
  );
}

export default App;
