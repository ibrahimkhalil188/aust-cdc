import React, { useEffect, useState } from "react";
const UserList = () => {
  const [isReload, setIsReload] = useState(false);
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
        if (data.acknowledged) {
        }
      });
    setIsReload(false);
    console.log(id);
  };
  console.log(users);

  useEffect(() => {}, [isReload]);
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Email</th>
            <th>password</th>
            <th>Status</th>
            <th>Transaction ID</th>
            <th>onlinePayment</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <td>{user.email}</td>
              <td>{user.onetimePass}</td>
              <td>
                {user.status === "pending" ? (
                  <button
                    className="btn btn-sm text-white"
                    onClick={() => handleSubmit(user._id)}
                  >
                    {user.status}
                  </button>
                ) : (
                  <button className="btn btn-sm text-white">Active</button>
                )}
              </td>
              <td>{user.transactionId}</td>
              <td>{user.onlinePayment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default UserList;
