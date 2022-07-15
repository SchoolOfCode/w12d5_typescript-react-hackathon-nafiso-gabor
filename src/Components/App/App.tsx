import React, { useEffect, useState } from "react";
//import Weather from "../Weather/Weather";
import "./App.css";

export type dataResult = {
  name?: any;
  temperature: number;
  description: any;
  timezone?: number;
  country: string;
  humidity: number;
};
function App() {
  const [data, setData] = useState<dataResult>();
  const [locationSearch, setLocationSearch] = useState("");
  // const [locations, setLocations] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${locationSearch}&appid=7f1f24a7cef58e3f76ff3bb60c5617c8&units=metric`
      )
        .then((res) => res.json())
        .then((result) => {
          setData({
            name: result.name,
            temperature: result.main.temp,
            description: result.weather[0].main,
            timezone: result.timezone,
            country: result.sys.country,
            humidity: result.main.humidity,
          });
          console.log(result);
        });
    };
    fetchData();
  }, [locationSearch]);

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setLocationSearch(e.target.value);
  }
  return (
    <div className="App">
      <div>
        <label>Search Location </label> <br />
        <input type="text" value={locationSearch} onChange={onChange} />
        <button>Search</button>
      </div>
      <div>
        <p>City name: {data?.name} </p>
        <p>Condition: {data?.description} </p>
        <p>Temperature: {data?.temperature} Celsius</p>
        <p>Country code: {data?.country}</p>
        <p>Humidity: {data?.humidity}%</p>
      </div>
    </div>
  );
}

export default App;
