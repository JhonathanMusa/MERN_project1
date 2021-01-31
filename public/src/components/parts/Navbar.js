import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import GetInfo from "../../sections/GetInfo";
import { Forms } from "../views/Forms";
import "bootstrap/dist/css/bootstrap.min.css";
import { Edit } from "../views/Edit";

export const Navbar = () => {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link to="/" className="navbar-brand">
            Users
          </Link>
          <Link to="/add" className="navbar-brand">
            Add user
          </Link>
        </nav>
        <br />
        <Route path="/" exact component={GetInfo} />
        <Route path="/add" component={Forms} />
        <Route path="/edit" component={Edit} />
      </div>
    </Router>
  );
};
