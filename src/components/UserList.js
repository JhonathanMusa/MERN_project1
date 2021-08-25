import React, { useEffect, useState } from "react";
import { Forms } from "./Forms";
import { UserTable } from "./UserTable";

const initialState = () => {
  const users = localStorage.getItem("users");
  return users ? JSON.parse(users) : [];
};

export const UserList = () => {
  const [addUsers, setAddUsers] = useState(false);
  const [users, setUsers] = useState(initialState);

  const handleDelete = (userId) => {
    const filterUser = users.filter((user) => user.id !== userId);
    setUsers(filterUser);
  };

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <div className="container">
      <button
        className="btn btn-outline-dark mb-5"
        onClick={() => setAddUsers(!addUsers)}
      >
        {!addUsers ? "+ New User" : "- Close Form"}
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
