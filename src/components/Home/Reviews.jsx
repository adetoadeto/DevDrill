import Img3 from "../../assets/consumer.jpg";
import Img4 from "../../assets/stars.png";

function Reviews() {
  return (
    <div className="review-section--box">
      <div className="user-profile">
        <div>
          <img src={Img3} alt="" />
          <p >George</p>
        </div>
        <img src={Img4} alt="" />
      </div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero accusantium tempore in nisi rerum repellendus nostrum itaque, eius expedita error?
      </p>
    </div>
  );
}

export default Reviews;
