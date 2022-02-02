import React, { useState } from "react";
import { connect } from "react-redux";
import { Image } from "semantic-ui-react";
import Image1 from "../Images/page1-image1.svg";
import { Navigate } from "react-router-dom";
import AccountCreationForm from "./AccountCreationForm";
import RenderInfoImage from "./RenderInfoImage";

export function SignUp(props) {
  const [userCreated, setUserCreated] = useState(false);
  const submitForm = (props) => {
    let data = props.values;
    let requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    console.log(requestOptions);
    fetch("http://localhost:8080/users", requestOptions)
      .then((response) => {
        if (response.status === 201) {
          console.log("SUCCESSS");
          return response.text();
        } else if (response.status === 400) {
          console.log("Failed due to bad input");
          alert("Failed due to bad input");
        } else {
          alert(response.message);
        }
      })
      .then((data) => {
        setUserCreated(true);
      })
      .catch((error) => {
        console.error("Error saving data: ", error);
      });
  };

  return (
    <div className="main_container">
      {userCreated && <Navigate to="/submissionSuccessful" />}
      <div className="left-sub-container">
        <div
          style={{
            padding: "5%",
            borderRadius: "0px 51.7405px 51.7405px 0px",
            background: "white",
            height: "100%",
          }}
        >
          <div style={{ paddingLeft: "23%", paddingRight: "23%" }}>
            <Image
              src={Image1}
              centered
              style={{ marginTop: "20px", width: "250px", height: "78px" }}
            />
            <div className="sign-up-label1">Create Account</div>
            <AccountCreationForm handleSubmit={() => submitForm(props)} />
          </div>
        </div>
      </div>
      <div className="right-sub-container">
      <RenderInfoImage/>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state.form.profile
    ? {
        values: state.form.profile.values,
        submitSucceeded: state.form.profile.submitSucceeded,
      }
    : {};
};

export default connect(mapStateToProps)(SignUp);
