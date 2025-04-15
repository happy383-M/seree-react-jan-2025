import React, { useState } from 'react';
import './styles.css';

function Users({ USER }) {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = (user) => {
    setSelectedUser(user); // Set the clicked user as the selected user
  };

  return (
    <div className="users-container">
      <h2>User List</h2>
      <table className="users-table">
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {USER.map((user, index) => (
            <tr key={index} onClick={() => handleUserClick(user)} className="user-row">
              <td>{user.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {selectedUser && (
        <div className="user-details">
          <h3>Details of {selectedUser.name}</h3>
          <img
            src={selectedUser.photo}
            alt={`${selectedUser.name}'s photo`}
            className="user-photo"
          />
          <p><strong>Age:</strong> {selectedUser.age}</p>
          <p><strong>Phone:</strong> {selectedUser.phone}</p>
          <p><strong>Email:</strong> {selectedUser.email}</p>
        </div>
      )}
    </div>
  );
}

export default Users;