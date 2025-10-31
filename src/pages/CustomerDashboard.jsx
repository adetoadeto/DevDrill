import "../components/Dashboard/customerDashboard.css";
import SmallButton from "../components/Button/SmallButton"
import PremiumPlan from "../components/Modal/PremiumPlan";
function CustomerDashboard() {
  return (
    <>
    <section className="customers-dashboard">
      <h1>Account Settings</h1>
      <div className="customers-dashboard__account-information">
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

      <div className="customers-dashboard__security-privacy">
        <h2>Security & Privacy</h2>
        <div>
          <div className="update-username">
            <p>
              <span>Update Username</span> <span>&gt;</span>
            </p>
            <form action="">
             
              <input type="text" placeholder="Enter a new username"/>
              <div className="buttons">
                    <SmallButton text="Cancel"/>
              <SmallButton text="Update Username"/>
              </div>
          
            </form>
          </div>

          <hr />

          <div className="update-password">
            <p>
              <span>Update Password</span> <span>&gt;</span>
            </p>
            <form action="">
              
              <label htmlFor="old-password">Old Password</label>
              <input type="text" placeholder="Enter your old password" />
              <label htmlFor="new -password">New Password</label>
              <input type="text" placeholder="Enter a new password" />
              <div className="buttons">
                <SmallButton text="Cancel"/>
                <SmallButton text="Change Password"/>
              </div>
            </form>
          </div>

          <hr />

          <div className="privacy-policy-container">
            <p>
              <span>Privacy Policy</span> <span>&gt;</span>
            </p>
            <article>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
              eveniet sit, repellendus ea velit facere eum quae modi saepe
              aperiam obcaecati, animi asperiores quod odio esse temporibus
              dicta eligendi veniam nemo iure labore! Impedit exercitationem
              commodi odit dolorem aliquid doloribus ipsa, sit delectus adipisci
              dolores? Obcaecati culpa tempora consectetur a.
            </article>
          </div>
        </div>
      </div>

      <div className="customers-dashboard__payment-history">
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
    </section>
    </>
    
  );
}

export default CustomerDashboard;
