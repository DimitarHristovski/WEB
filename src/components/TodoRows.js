import React, { useState } from "react";
import { Container, Col, Row, Table, Card } from "react-bootstrap";

import "../assets/css/TodoRows.css";
import { TodoCard } from "./TodoCard";
import { TodoTable } from "./TodoTable";
import { TodoNum } from "./TodoNum";

export function TodoRows() {
  const [count, setCount] = useState(0);
  const [newCount, setNewCount] = useState([]);

  const click = () => {
    setCount(count + 1);
    setNewCount([...newCount, count + 1]);
  };

  return (
    <div>
      <Row>
        <Col className="TodoRows">
          <h1>Above,</h1>
          <button onClick={() => click()}>Click me</button>
        </Col>
      </Row>

      <hr></hr>
      <Container fluid="md">
        <Row xs={1} md={3}>
          <Col className="bg-primary">
            <h1>First,Number</h1>
            <p>You clicked {count} times</p>
            <ol>
              {newCount.map((e, key) => (
                <TodoNum count={e} key={key} />
              ))}
            </ol>
          </Col>
          <Col className="bg-secondary">
            <h1>Second,Table </h1>{" "}
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th># Table</th>
                  <th>You clicked {count} times</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    {newCount.map((e, key) => (
                      <TodoTable order={true} count={e} key={key} />
                    ))}
                  </td>
                  <td>
                    {newCount.map((e, key) => (
                      <TodoTable count={e} key={key} />
                    ))}
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col className="bg-danger">
            <h1>Third,Cards </h1>{" "}
            <Card>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>

                <Card.Text>You clicked {count} times</Card.Text>
              </Card.Body>
            </Card>
            {newCount.map((e, key) => (
              <TodoCard key={key} count={e} />
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
