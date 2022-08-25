import React, { useEffect } from "react";
import './App.css';

function App() {

  const [data, setData] = React.useState([]);
  const [city, setCity] = React.useState("stratford")
  const [category, setCategory] = React.useState("pharmacies")

  useEffect(() => {
    // if (!city) {
    //   return
    // } else {
    fetch(`https://cyf-bazmurphy-cityguide.herokuapp.com/${city}/${category}`)
    // fetch(`https://cyf-bazmurphy-cityguide.herokuapp.com/${category ? `${city}/${category}` : `${city}`}`)
      .then(res => res.json())
      .then(data => setData(data))
    // }
  }, [city, category]);

  const changeCity = (event) => {
    console.log(event.target.value);
    setCity(event.target.value);
  };

  const changeCategory = (event) => {
    console.log(event.target.value);
    setCategory(event.target.value);
  };

  // console.log(data);

  const capitalise = (word) => {
    return word.slice(0,1).toUpperCase() + word.slice(1);
  }

  return (
    <div className="app-container">
      <h1 className="heading">🔍CityGuide</h1>
      <div className="city-select-container">
        <label htmlFor="city" className="city-label">Choose A London Borough:</label>
        <select id="city" className="city-select" onChange={changeCity}>
          {/* <option value="">-</option> */}
          <option value="stratford">Stratford</option>
          <option value="heathrow">Heathrow</option>
          <option value="harrow">Harrow</option>
        </select>
      </div>
      <div className="category-buttons-container">
        <button className="category-button" value="pharmacies" onClick={changeCategory}>Pharmacies</button>
        <button className="category-button" value="colleges" onClick={changeCategory}>Colleges</button>
        <button className="category-button" value="hospitals" onClick={changeCategory}>Hospitals</button>
        <button className="category-button" value="doctors" onClick={changeCategory}>Doctors</button>
      </div>
        {<div className="currently-showing-container">
          <p>Currently displaying <span className="currently-showing-category">{capitalise(category)}</span> in <span className="currently-showing-city">{capitalise(city)}</span></p>
        </div>}
      <div className="data-container">
        {data.map((element, index) => {
          return (
          <div key={index} className="data-item">
            <span className="data-item-name-title">Name:</span>
            <span className="data-item-name-info">{element.name}</span>
            <span className="data-item-address-title">Address:</span>
            <span className="data-item-address-info">{element.address}</span>
            <span className="data-item-phone-title">Phone:</span>
            <span className="data-item-phone-info">{element.phone}</span>
            {element.website && element.website !== "#" && <a href={element.website} target="_blank" rel="noreferrer" className="data-item-website">Website Link</a>}
          </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
