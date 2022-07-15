import React from "react";
//import "./styles.css";
import { Card } from "semantic-ui-react";
//nimport "./App.css";
import type { dataResult } from "../App/App";
export default function Weather(props: dataResult) {
  return (
    <Card>
      <Card.Content>
        <Card.Header className="header">
          {props.description} {props.temperature}
        </Card.Header>
      </Card.Content>
    </Card>
  );
}
