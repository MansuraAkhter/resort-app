import { AppBar, Toolbar, Button } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <NavLink className="linkText" to="/">
            <Button color="inherit">HOME</Button>
          </NavLink>
          <NavLink className="linkText" to="/aboutus">
            <Button color="inherit">ABOUT US</Button>
          </NavLink>
          <NavLink className="linkText" to="/">
            <Button color="inherit">PACKAGES</Button>
          </NavLink>
          <NavLink className="linkText" to="/">
            <Button color="inherit">ECO PARK</Button>
          </NavLink>
          <NavLink className="linkText" to="/">
            <Button color="inherit">COTTAGE</Button>
          </NavLink>
          <NavLink className="linkText" to="/">
            <Button color="inherit">OUR RESORT</Button>
          </NavLink>
          <NavLink className="linkText" to="/">
            <Button color="inherit">EVENTS</Button>
          </NavLink>
          <NavLink className="linkText" to="/">
            <Button color="inherit">CONTACT</Button>
          </NavLink>
        </Toolbar>
      </AppBar>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
