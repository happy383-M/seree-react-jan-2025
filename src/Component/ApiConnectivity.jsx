import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ApiConnectivity() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setUsers(response.data); // Set the fetched data to the state
      })
      .catch((error) => {
        console.log(error); // Log any errors
      });
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Sl.no</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
              <td>{user.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ApiConnectivity;




