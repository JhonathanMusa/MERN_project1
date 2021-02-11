import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { UserList } from "../views/UserList";
import { Forms } from "../views/Forms";
import { Edit } from "../views/Edit";
import { Delete } from "../views/Delete";

export const Navbar = () => (
  <Router>
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/" className="navbar-brand">
          Users
          <i className="fas fa-users m-1"></i>
        </Link>

        <Link to="/add" className="navbar-brand">
          Add user
          <i className="fas fa-user-plus m-1"></i>
        </Link>
      </nav>

      <Route path="/" exact component={UserList} />
      <Route path="/add" component={Forms} />
      <Route path="/edit/:id" component={Edit} />
      <Route path="/delete/:id" component={Delete} />
    </div>
  </Router>
);
