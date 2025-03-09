import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Sidebar } from "../Components/reactjs/Sidebar";
import { LeftSidebar } from "../Components/reactjs/LeftSidebar";

export const ReactJSBlog = () => {
  return (
    <section className="react-blog">
      <div className="container">
        <div className="coll-md-20 left-sidebar-section">
          <LeftSidebar/>
        </div>
        <div className="coll-md-70 react-main-section">
          <Outlet />
        </div>
        <div className="coll-md-10 sidebar-section">
          <div className="card">
            <Sidebar />
          </div>
        </div>
      </div>
    </section>
  );
};
