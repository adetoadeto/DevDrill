import "./header.css";
import { Link } from "react-router-dom";

function Header () {
    return <nav>
        <Link to="/" className="heading">DevDrill</Link>
        <ul>
            <Link to="/">Home</Link>
            <li><a href="/#overview-section">Overview</a></li>
            <Link to="/play">Explore Games</Link>
            <Link to="/user">Customer Dashboard</Link>
        </ul>
        <button className="small-button"><Link to="/account">Sign Up</Link></button>
    </nav>
}

export default Header;