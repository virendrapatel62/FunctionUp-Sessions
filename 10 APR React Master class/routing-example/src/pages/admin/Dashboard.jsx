import React from "react";
import { Link, Outlet } from "react-router-dom";

function Sidebar() {
  return (
    <aside>
      <div>
        <Link to={"products/create"}>Create Product</Link>
      </div>
      <div>
        <Link to={"products/update"}>Update Product</Link>
      </div>
      <div>
        <Link to={"products/details"}>Details</Link>
      </div>
    </aside>
  );
}

export default function Dashboard() {
  return (
    <div className="admin-dashboard">
      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="main-content">
        <section>Main Content</section>

        <Outlet />
      </div>
    </div>
  );
}
