import { LanguageOutlined, SearchOutlined } from "@mui/icons-material";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlined />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlined />
            English
          </div>
        </div>
      </div>
    </div>
  )
}
export default Navbar