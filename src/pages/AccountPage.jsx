import { Outlet } from "react-router-dom";
import "../components/Account/account.css";

function Account () {
  return (
    <section className="account">
      <Outlet />
    </section>
  )
}

export default Account;