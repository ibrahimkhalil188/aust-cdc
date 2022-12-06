import React from "react";
import UserList from "../Components/AdminDashboard/UserList";

const admin = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col m-6">
        {/* <!-- Page content here --> */}

        <UserList></UserList>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-56 border-r-4 bg-primary text-white font-sans font-bold text-lg">
          {/* <!-- Sidebar content here --> */}
          <li>
            <a>New User</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default admin;
