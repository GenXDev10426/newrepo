import { IconButton } from "@material-ui/core";
import "../components/Header.css";
import "../components/Search.js";
import AccountCircleSharpIcon from "@material-ui/icons/AccountCircleSharp";
import logo from "../logo.png";
import Search from "../components/Search.js";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <Search />

      <IconButton color="inherit" className="accountIcon">
        <AccountCircleSharpIcon />
      </IconButton>
    </div>
  );
};

export default Header;
