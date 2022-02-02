import React, { Fragment } from "react";
import { Field, reduxForm } from "redux-form";
import { Form, Input, Icon, Button, Image } from "semantic-ui-react";
import { isValueNullOrUndefined } from "../Functions";
import "./LoginStyles.css";
import userIcon from "../Images/user.svg";
import lockIcon from "../Images/lock.svg";
import emailIcon from "../Images/email.svg";
import eyeSlashIcon from "../Images/eye-slash.svg";
import googleIcon from "../Images/google.svg";

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length > 50) {
    errors.name = "Maximum 50 characters or less";
  }
  if (!values.emailId) {
    errors.emailId = "Required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailId)
  ) {
    errors.emailId = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8) {
    errors.password = "Minimum 8 characters or more";
  } else if (!/^[a-z0-9]+$/i.test(values.password))
    errors.password = "Password should contain only alphabets and numbers";
  return errors;
};

const renderField = ({
  input,
  placeholder,
  type,
  icon1Src,
  icon2Src,
  meta: { touched, error },
}) => (
  <div>
    <div>
      <Input
        className="form-input"
        style={{ marginTop: "20px" }}
        iconPosition="left"
        fluid
      >
        {!isValueNullOrUndefined(icon1Src) && (
          <img
            src={icon1Src}
            style={{ right: "auto", left: "10px" }}
            className="icon-user"
          />
        )}
        {!isValueNullOrUndefined(icon2Src) && (
          <img
            src={icon2Src}
            style={{ left: "auto", right: "10px" }}
            className="icon-user"
          />
        )}
        <input
          style={{ marginLeft: "5px" }}
          {...input}
          placeholder={placeholder}
          type={type}
          className="form-control"
        />
      </Input>
      <div style={{ textAlign: "left" }}>
        {touched && (
          <span className="text-error">
            {error && (
              <span>
                <Icon name="close" />
                {error}
              </span>
            )}
          </span>
        )}
      </div>
    </div>
  </div>
);

const AccountCreationForm = (props) => {
  const { handleSubmit, pristine, submitting } = props;
  return (
    <Fragment>
      <Form onSubmit={handleSubmit}>
        <div className="form-group">
          <Field
            name="name"
            component={renderField}
            placeholder="Full Name"
            icon1Src={userIcon}
          />
        </div>
        <div className="form-group">
          <Field
            name="emailId"
            component={renderField}
            placeholder="Email address"
            icon1Src={emailIcon}
          />
        </div>
        <div className="form-group">
          <Field
            name="password"
            type="password"
            component={renderField}
            placeholder="Password"
            icon1Src={lockIcon}
            icon2Src={eyeSlashIcon}
          />
        </div>
        <div
          style={{
            textAlign: "left",
            marginTop: "20px",
          }}
        >
          <div class="ui checkbox">
            <input type="checkbox" name="example" />
            <label className="sign-up-label2">
              I agree with <span style={{ color: "#eb2227" }}>Terms</span> and{" "}
              <span style={{ color: "#eb2227" }}> Privacy</span>{" "}
            </label>
          </div>
        </div>
        <div>
          <Button
            className="form-button sign-up-button"
            style={{
              background: "#EB2227",
              marginTop: "20px",
              color: "white",
            }}
            type="submit"
          >
            SIGN UP
          </Button>
        </div>
        <div>
          <Button
            basic
            className="form-button sign-up-google"
            style={{ marginTop: "20px" }}
          >
            <Image src={googleIcon} verticalAlign="middle" />{" "}
            <span>Sign Up with Google</span>
          </Button>
        </div>
        <div className="sign-up-label3">
          Already have an account?
          <span style={{ color: "#eb2227" }}> Log In</span>
        </div>
      </Form>
    </Fragment>
  );
};

export default reduxForm({
  form: "profile",
  validate,
})(AccountCreationForm);
