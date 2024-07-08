import React from "react";

function Roster({ detailed, roster }) {
  if (!detailed) {
    return(<ol>
      {roster.map(({firstName, id}) => <li key ={id}>{firstName}</li>)}
      </ol>)
  } else {
    const rows = roster.map(({id, firstName, lastName, location}, index) => (
      <tr key={index}>
      <td>{id}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{location}</td>
    </tr>
  ));
    return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  ); 
  }
}


export default Roster;
