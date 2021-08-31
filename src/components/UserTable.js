import React from "react";

export const UserTable = ({ users, handleDelete }) => {
  return (
    <table className="table text-center mt-3">
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.phone}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => handleDelete(user.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
