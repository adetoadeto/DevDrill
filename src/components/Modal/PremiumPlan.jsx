import "../Modal/premiumPlan.css";
import Img1 from "../../assets/heroImg.png";

const PremiumPlan = () => {
  return (
    <modal className="premium-plan">
      <button><i class="fa-solid fa-circle-xmark"></i></button>
       <div className="premium-plan-modal" open>
      <div>
        <h2>Upgrade to Pro</h2>
        <p>Unlock more stages, move beyond the basics</p>
        <div>
          <div>
            <i class="fa-solid fa-check"></i>
            Intermediary Stage
          </div>
          <div>
            <i class="fa-solid fa-check"></i>
            Advanced Stage
          </div>
          
        </div>
        <p><strong>#5000</strong> (one time subscription)</p>
        <button className="small-button">Upgrade Now <i class="fa-solid fa-web-awesome"></i></button>
      </div>

      <div>
        <img src={Img1} alt="" />
      </div>
    </div>
    
    </modal>
   
  );
};

export default PremiumPlan;
