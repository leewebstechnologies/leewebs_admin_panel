import { AccountCircleOutlined, Dashboard, ExitToApp, Inventory, LocalShipping, NotificationsOutlined, PersonOutlineOutlined, Poll, PsychologyOutlined, SettingsApplications, SettingsSystemDaydream, ViewStreamOutlined } from "@mui/icons-material";
import "./sidebar.scss";
// import DashboardIcon from "@mui/icons-material/Dashboard";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Leewebs Admin</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <Dashboard className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <li>
            <PersonOutlineOutlined className="icon" />
            <span>Users</span>
          </li>
          <li>
            <Inventory className="icon" />
            <span>Products</span>
          </li>
          <li>
            <ViewStreamOutlined className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShipping className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL LINKS</p>
          <li>
            <Poll className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsOutlined className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydream className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlined className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplications className="icon"/>
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlined className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToApp className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};
export default Sidebar;
