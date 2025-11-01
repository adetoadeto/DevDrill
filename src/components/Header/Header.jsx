import "./header.css";
import { Link } from "react-router-dom";

let signedIn = false;
let admin = false;
function Header() {
  return (
    <nav>
      <Link to="/" className="heading">
        DevDrill
      </Link>
      <ul>
        <Link to="/">Home</Link>
        <li>
          <a href="/#overview-section">Overview</a>
        </li>
        <Link to="/play">Explore Games</Link>
        {admin && <Link to="/admin"><i class="fa-solid fa-gauge"></i> Dashboard</Link> }
      </ul>

      {!signedIn ? (
        <button className="small-button signup">
          <Link to="/account">
            Sign Up <i class="fa-solid fa-user-plus"></i>{" "}
          </Link>
        </button>
      ) : (
        <ul>
            <Link to="/user"> Settings <i class="fa-solid fa-gear"></i></Link>
            <button className="small-button">
                <i class="fa-solid fa-arrow-right-from-bracket"></i> Log Out
            </button>
        </ul>
      )}
     
    </nav>
  );
}

export default Header;
