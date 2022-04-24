import React from "react";
import { Table } from "react-bootstrap";

export function TodoTable({ count, order }) {
  return (
    <Table striped bordered hover variant="dark">
      <tbody>
        <tr>{order ? <td>{count}. </td> : <td>You clicked {count} </td>}</tr>
      </tbody>
    </Table>
  );
}
