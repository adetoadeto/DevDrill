import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import "./premiumPlan.css";
import Img1 from "../../assets/heroImg.png";
import SmallButton from "../Button/SmallButton";

const PremiumPlan = ({ref}) => {
  const dialog = useRef();

  useImperativeHandle(ref, ()=> {
    return {
      open() {
        dialog.current.showModal();
      }
    }
  })

  return createPortal (
    <dialog ref={dialog} className="premium-plan">
       <form method="dialog"><button className="close-modal"><i class="fa-solid fa-circle-xmark"></i></button></form> 
       <div className="premium-plan-modal">
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
        <SmallButton>Upgrade Now <i class="fa-solid fa-web-awesome"></i></SmallButton>
      </div>

      <div>
        <img src={Img1} alt="" />
      </div>
      </div>
    </dialog>,
    document.getElementById("modal")
   
  );
};

export default PremiumPlan;
