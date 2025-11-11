import { useImperativeHandle, useRef, useState } from "react";
import { createPortal } from "react-dom";
import "../components/Account/account.css";
import Img from "../assets/loginImg.png";
import Login from "../components/Account/Login";
import SignUp from "../components/Account/SignUp";

function Account({ ref}) {
  const [choice, setChoice] = useState("signup")

  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  function handleModalChoice (value) {
    setChoice(value)
  }
  return createPortal(
    <dialog ref={dialog} className="account-modal">
      <div>
        <div>
          <img src={Img} alt="sky rocketing rocket" />
        </div>

        {choice === "login" && <Login modalChoice={handleModalChoice}/>}
        {choice === "signup" &&  <SignUp modalChoice={handleModalChoice}/>}
      </div>
      <form method="dialog" className="account-modal--close">
         <button className="close-modal"><i class="fa-solid fa-circle-xmark"></i></button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
}

export default Account;
