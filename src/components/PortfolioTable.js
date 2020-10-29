import React from "react";
import "materialize-css";
import { Table } from "react-materialize";

export default function MyTable() {
    return (
      <Table>
      <thead>
        <tr>
          <th data-field="id">
            Portfolio
          </th>
        </tr>
      </thead>
    </Table>
    )
  }

