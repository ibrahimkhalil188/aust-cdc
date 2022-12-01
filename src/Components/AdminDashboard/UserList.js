import React, { useEffect, useState } from "react";
const UserList = () => {
const [isReload,setIsReload] = useState(false);
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
    setIsReload(true);
    fetch(`http://localhost:5000/users/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.acknowledged){
        }
      });
setIsReload(false)
    console.log(id);
  };
  console.log(users);

  useEffect(()=>{},[isReload])
  return (
    <div className="text-4xl">
      {users.map((user) => (
        <div>
          <h1>{user.email}</h1>
          {
            user.status==="pending"?<button className="btn btn-sm" onClick={() => handleSubmit(user._id)}>
            {user.status}
          </button>:""
          }
        </div>
      ))}
    </div>
  );
};

export default UserList;
