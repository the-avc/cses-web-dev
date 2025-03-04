import { NavLink, useNavigate } from "react-router-dom";
import { useUser } from "@/provider/userProvider";
import close from "./images/close.png";
import "./Sidebar.scss";
import useAuth from "@/hooks/useAuth";

const Sidebar = ({ isSideMenuOpen, closeSideMenu }) => {
  const navigate = useNavigate();
  const { userData } = useUser();
  const { deleteToken } = useAuth();

  const menuItems = userData?.userType === "ADMIN" || userData?.userType === "SUPER_ADMIN"
    ? [
      { path: "/users/dashboard", name: "Dashboard" },
      { path: "/users/bulk_register", name: "Bulk Register" },
      { path: "/users/reset", name: "Reset User" },
      { path: "/users/all_users", name: "All Users" },
    ]
    : [
      { path: "/users/dashboard", name: "Dashboard" },
      { path: "/users/change_pass", name: "Change Password" },
      { path: "/users/payment", name: "Payment" },
    ];

  function handleLogout() {
    deleteToken();
    navigate("/", { replace: true });
  }

  return (
    <aside className={isSideMenuOpen ? "visible" : "hidden"}>
      {/* <div className="sidebar">
        <div className="toggle">
          <div className="logo" style={{ cursor: 'hover' }} onClick={() => navigate("/")}>
            <h2>
              CSE<span className="danger">SOCIETY</span>
            </h2>
          </div>
          <div className="close" onClick={closeSideMenu}>
            <img className="invert-logo" src={close} alt="close" />
          </div>
        </div>

        {menuItems.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="sb-item"
            activeclassname="active"
          >
            <span className="material-icons-sharp"></span>
            <h3>{item.name}</h3>
          </NavLink>
        ))}

        <div className="sb-item" onClick={handleLogout}>
          <span className="material-icons-sharp"></span>
          <h3>Logout</h3>
        </div>
      </div> */}
    </aside>
  );
};

export default Sidebar;