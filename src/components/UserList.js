import React, { useState } from "react";
import { Forms } from "./Forms";

export const UserList = () => {
  const [users, setUsers] = useState([]);

  return (
    <div className="container">
      <Forms setUsers={setUsers} />

      {users.length > 0 ? (
        <table className="table text-center">
          <thead>
            <tr>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h2 className="text-center">Nothing to see</h2>
      )}
    </div>
  );
};
