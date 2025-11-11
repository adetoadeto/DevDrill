import "../components/profileSettings.css";
import SmallButton from "../components/Button/SmallButton";
import PremiumPlan from "../components/PremiumPlan/PremiumPlan";
import { useState } from "react";

function ProfileSettings() {
  let payment = true
  const [opened, setOpened] = useState(false); //this closes everything rather than the specific

  // close and open form
  function handleToggleForm() {
    console.log("I got clicked");
    setOpened((prevState) => !prevState);
  }
  console.log(opened);
  return (
    <>
      <section className="profile-settings">
        <h1>Account Settings</h1>

        {/* Account information */}
        <div className="profile-settings__account-information">
          <h2>Account Information</h2>
          <div>
            <p>
              <span>Username</span> <span>@example_g</span>
            </p>
            <hr />
            <p>
              <span>Account Created</span> <span>May 12, 2022</span>
            </p>
            <hr />
            <p>
              <span>Email Address</span> <span>example"gmail.com</span>
            </p>
          </div>
        </div>

        {/* Security privacy */}
        <div className="profile-settings__security-privacy">
          <h2>Security & Privacy</h2>

          <div>
            {/* update username */}
            <div className="update-username">
              <p>
                <span>Update Username</span>
                <button onClick={handleToggleForm}>&gt;</button>
              </p>
              <form action="" className={opened ? "show" : "hide"}>
                <input type="text" placeholder="Enter a new username" />
                <SmallButton>Update Username</SmallButton>
               
              </form>
            </div>

            <hr />
            {/* update password */}
            <div className="update-password">
              <p>
                <span>Update Password</span> <button onClick={handleToggleForm}>&gt;</button>
              </p>
              <form action="" className={opened ? "show" : "hide"}>
                <label htmlFor="old-password">Old Password</label>
                <input type="text" placeholder="Enter your old password" />
                <label htmlFor="new -password">New Password</label>
                <input type="text" placeholder="Enter a new password" />
                <SmallButton>Change Password</SmallButton>
              </form>
            </div>

            <hr />
            {/* privacy-policy */}
            <div className="privacy-policy-container">
              <p>
                <span>Privacy Policy</span> <button onClick={handleToggleForm}>&gt;</button>
              </p>
              <article className={opened ? "show" : "hide"}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempora eveniet sit, repellendus ea velit facere eum quae modi
                saepe aperiam obcaecati, animi asperiores quod odio esse
                temporibus dicta eligendi veniam nemo iure labore! Impedit
                exercitationem commodi odit dolorem aliquid doloribus ipsa, sit
                delectus adipisci dolores? Obcaecati culpa tempora consectetur
                a.
              </article>
            </div>
          </div>
        </div>

        {/* Payment history */}
        {payment &&  <div className="profile-settings__payment-history">
          <h2>Payment history</h2>
          <table>
            <thead>
              <tr>
                <th>Payment date</th>
                <th>Product</th>
                <th>Price</th>
                <th>Payment status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>25-01-29</td>
                <td>Premium Plan</td>
                <td>#1000</td>
                <td>Successful</td>
              </tr>
            </tbody>
          </table>
        </div>
        }
       
      </section>
    </>
  );
}

export default ProfileSettings;
