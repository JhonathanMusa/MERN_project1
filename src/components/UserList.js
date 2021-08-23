import React, { useState } from "react";
import { Forms } from "./Forms";
import { UserTable } from "./UserTable";

export const UserList = () => {
  const [addUsers, setAddUsers] = useState(false);
  const [users, setUsers] = useState([]);

  const handleDelete = (userId) => {
    const filterUser = users.filter((user) => user.id !== userId);
    setUsers(filterUser);
  };

  return (
    <div className="container">
      <button className="btn btn-dark mb-5" onClick={() => setAddUsers(!addUsers)}>
        {!addUsers ? "+ Add User" : "- Close Form"}
      </button>

      {addUsers && <Forms setUsers={setUsers} />}
      {users.length > 0 ? (
        <UserTable users={users} handleDelete={handleDelete} />
      ) : (
        <h2 className="text-center">Nothing to see</h2>
      )}
    </div>
  );
};
