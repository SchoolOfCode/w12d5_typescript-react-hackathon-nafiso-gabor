import React, { useEffect, useState } from "react";
import Weather from "../Weather/Weather";
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
  //const [latitude, setLatitude] = useState<Number>(0);
  //const [longitude, setLongitude] = useState<Number>(0);
  const [data, setData] = useState<dataResult>();

  useEffect(() => {
    const fetchData = async () => {
      // navigator.geolocation.getCurrentPosition(function (position) {
      //   setLatitude(latitude);
      //   setLongitude(longitude);
      // });
      let city = "birmingham";
      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7f1f24a7cef58e3f76ff3bb60c5617c8`
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
          //console.log(data);
        });
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <p>{data?.name} </p>
      <p>{data?.description} </p>
      <p>{data?.temperature}</p>
      <p>{data?.timezone}</p>
      <p>{data?.country}</p>
      <p>{data?.humidity}</p>
    </div>
  );
}

export default App;
