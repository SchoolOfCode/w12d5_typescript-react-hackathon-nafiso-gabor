import React from "react";
//import "./styles.css";
import { Card } from "semantic-ui-react";
//import "./App.css";

export default function Weather(weatherData: any) {
  return (
    <Card>
      <Card.Content>
        <Card.Header className="header">{weatherData}</Card.Header>
      </Card.Content>
    </Card>
  );
}
