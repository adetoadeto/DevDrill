import "./header.css";
import { Link } from "react-router-dom";

function Header () {
    return <nav>
        <Link to="/" className="heading">DevDrill</Link>
        <ul>
            <Link to="/DevDrill">Home</Link>
            <li><a href="/#overview-section">Overview</a></li>
            <Link to="/DevDrill/play">Explore Games</Link>
            <Link to="/DevDrill/user">Customer Dashboard</Link>
        </ul>
        <button className="small-button"><Link to="/DevDrill/account">Sign Up</Link></button>
    </nav>
}

export default Header;