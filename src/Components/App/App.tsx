import React, { useEffect, useState } from "react";
import "./App.css";
import Weather from "../Weather/Weather";

function App() {
  const [latitude, setLatitude] = useState<any>([]);
  const [longitude, setLongitude] = useState<any>([]);
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLatitude(30);
        setLongitude(15);
      });

      await fetch(
        `${process.env.REACT_APP_API_URL}/weather/?lat=${latitude}&lon=${longitude}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log(result);
          //console.log(data);
        });
    };
    fetchData();
  }, [latitude, longitude]);

  // type WeatherProps = {
  //   weatherdata: any;
  // };
  return (
    <div className="App">
      <Weather weatherData={data} />
    </div>
  );
}

export default App;
