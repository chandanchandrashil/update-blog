import { Outlet, Link } from "react-router-dom";

const DashBoardLayout = () => {
  return (
    <div className="">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col bg-blue-100 items-center justify-center">
          {/* Page content here */}
          <Outlet />
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open Sidebar
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <Link to="add-blog">Add Blog</Link>
            </li>

            <li>
              <Link to="all-blogs">All Blogs</Link>
            </li>
            <li>
              <Link to="manage-blogs">Manage Blogs</Link>
            </li>
            <li>
              <Link to="user-profile">Profile</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
