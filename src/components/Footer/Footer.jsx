import "./footer.css";
import { Link } from "react-router-dom";

function Footer () {
  return (
    <footer>
        <ul>
          <p className="heading">DevDrill</p>
          <li>&copy; {new Date().getFullYear()}</li>
        </ul>

        <ul>
          <p className="heading">Links</p>
          <ul>
            <Link to="/">Home</Link>
            <li><a href="/#overview-section">Overview</a></li>
            <Link to="/play">Explore Game</Link>
          </ul>
        </ul>

        <ul>
          <p className="heading">Engage with us on social media</p>
          <ul  className="footer__social-icons">
             <li><a href="#"><i class="fa-brands fa-whatsapp"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
          </ul>
        </ul>

        <ul>
          <p className="heading">For complaints and further enquiries</p>
          <li><i class="fa-solid fa-phone-volume"></i> <a href="tel:+23412345678">+23412345678</a></li>
          <li><i class="fa-solid fa-envelope"></i><a href="mailto:example@gmail.com">example@gmail.com</a></li>
        </ul>

        <ul><p className="heading">Payment channel</p>
        <li>Stripe Icon</li></ul>
    </footer>
  )
}

export default Footer