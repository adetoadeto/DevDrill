import { useRef } from "react";
import { Link } from "react-router-dom";
import Account from "../../pages/Account";

import SmallButton from "../Button/SmallButton";
import "./header.css";
const admin = true;
const signedIn = true;

function Header() {
  const dialog = useRef();
  function handleModal() {
    dialog.current.open();
  }

  return (
    <>
      <Account ref={dialog} />
      <nav>
        <Link to="/" className="heading">
          DevDrill
        </Link>
        <ul className="nav-links">
          <Link to="/">Home</Link>
          <li>
            <a href="/#overview-section">Overview</a>
          </li>
          <Link to="/play">Get Started</Link>
          {signedIn && admin && (
            <Link to="/admin-dashboard">
              <i class="fa-solid fa-gauge"></i> Dashboard
            </Link>
          )}
        </ul>

        {!signedIn && (
          <SmallButton onClick={handleModal}>
            Sign Up <i class="fa-solid fa-user-plus"></i>
          </SmallButton>
        )}

        {signedIn && (
          <ul className="settings-links">
            <Link to="/profile-settings">
              Settings <i class="fa-solid fa-gear"></i>
            </Link>
            <SmallButton>
              <i class="fa-solid fa-arrow-right-from-bracket"></i> Log Out
            </SmallButton>
          </ul>
        )}
      </nav>
    </>
  );
}

export default Header;
