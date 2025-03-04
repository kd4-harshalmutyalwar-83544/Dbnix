import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
      <a className="navbar-brand" href="#">Task</a>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="ms-auto">
            <Link to= "/loanForm">
          <button className="btn btn-outline-primary mx-2">
            Agreement
          </button>
          </Link>
          <Link to="/">
            <button className="btn btn-outline-danger">Logout</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
