import React, { useEffect, useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  }, []);
  const handleSubmit = (id) => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    console.log(id);
  };
  console.log(users);
  return (
    <div className="text-4xl">
      {users.map((user) => (
        <div>
          <h1>{user.email}</h1>
          <button className="btn btn-sm" onClick={() => handleSubmit(user._id)}>
            {user.status}
          </button>
        </div>
      ))}
    </div>
  );
};

export default UserList;
