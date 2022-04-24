import React from "react";
import { Card } from "react-bootstrap";

export function TodoCard({count}) {
  console.log("count", count);
  return (
    <Card className="m-2">
      <Card.Body>
        <Card.Title>Card </Card.Title>

        <Card.Text>You clicked {count} </Card.Text>
      </Card.Body>
    </Card>
  );
}
