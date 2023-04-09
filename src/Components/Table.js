import React from "react"
import data from "../process_info.json"

export default function Table() {
  
    function renderTableRows() {
      return data.map(row => (
        <tr key={row.id}>
          <td>{row.name}</td>
          <td>{row.status}</td>
          <td>{row.create_time}</td>
        </tr>
      ));
    }
  
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Create Time</th>
          </tr>
        </thead>
        <tbody>
          {renderTableRows()}
        </tbody>
      </table>
    );
  }
  