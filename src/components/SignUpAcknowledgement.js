import React from "react";
import "./SignUpStyles.css";
import { Image } from "semantic-ui-react";
import Image1 from "../Images/page1-image1.svg";
import Image3 from "../Images/image 3.svg";
import RenderInfoImage from "./Common/RenderInfoImage";
export default function SignUpAcknowledgement() {
  return (
    <div>
      <div className="main_container">
        <div className="left-sub-container">
          <div
            style={{
              padding: "5%",
              borderRadius: "0px 51.7405px 51.7405px 0px",
              background: "white",
              height: "100%",
              textAlign: "center",
            }}
          >
            <Image
              src={Image1}
              centered
              style={{ marginTop: "20px", width: "250px", height: "78px" }}
            />
            <div className="loginack__label1">Successfully Submitted!</div>
            <Image
              src={Image3}
              centered
              style={{ marginTop: "25px", width: "203px", height: "203px" }}
            />
            <div className="loginack__label2">
              Our representative will get in touch with you shortly
            </div>
          </div>
        </div>
        <div className="right-sub-container">
            <RenderInfoImage/>
        </div>
      </div>
    </div>
  );
}
