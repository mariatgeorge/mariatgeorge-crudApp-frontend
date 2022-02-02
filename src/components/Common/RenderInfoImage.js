import React from "react";
import Vector1 from "../../Images/Vector-1.svg";
import Vector2 from "../../Images/Vector-2.svg";
import Vector3 from "../../Images/Vector-3.svg";
import {Image} from "semantic-ui-react";
import Image2 from "../../Images/image 2.png";
import "./CSS/RenderImageStyles.css";

export default function RenderInfoImage() {
  return (
    <React.Fragment>
      <Image
          src={Vector1}
          style={{
            left: "15%",
            marginTop: "-250px",
            width: "18px",
            height: "30px",
          }}
        />
        <Image
          src={Vector2}
          style={{
            left: "55%",
            marginTop: "-350px",
            width: "22px",
            height: "36px",
          }}
        />
        <Image
          src={Vector3}
          style={{
            left: "80%",
            marginTop: "-290px",
            width: "30px",
            height: "50px",
          }}
        />
        <Image src={Image2} className="image-style" />
    </React.Fragment>
  );
}
