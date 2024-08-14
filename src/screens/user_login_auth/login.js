import React, { Component } from "react";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  login_action,
  forgetCheckedEmail_action,
  forgetGetOtp_action,
  forgetUpdatePassword_action,
} from "../../actions/user_login_auth_actions/user_login_auth_action";
import { withRouter } from "../../utils/withRouter";
import Loader from "../../utils/Loader";
import { clearlocalStorage, toastError } from "../../utils/constants";
import {
  emailValidator,
  loginPasswordValidator,
  otpValidator,
  confirmPasswordValidator,
} from "../../utils/Validator";
import Modal from "react-modal";
import "./login.css";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formType: "login", // or 'register'
      userEmail: "",
      password: "",
      userName: "",
      is_showpass: false,
      isLoading: false,
    };
    this.handleObscure = this.handleObscure.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleForm(formType) {
    this.setState({ formType });
  }

  handleObscure() {
    this.setState((prevState) => ({ is_showpass: !prevState.is_showpass }));
  }

  handleSubmit() {
    const { formType, userEmail, password, userName } = this.state;
    // Implement login or register logic based on formType
    if (formType === "login") {
      // Handle login
      this.props.login_action(userEmail, password).then((data) => {
        if (data.error !== 1) {
          localStorage.setItem("loginData", JSON.stringify(data.data));
          this.props.history.push("/quora");
        } else {
          toast.error(data.msg);
        }
      });
    } else if (formType === "register") {
      // Handle register
      // this.props.register_action(userName, userEmail, password)
      //   .then((data) => {
      //     if (data.error !== 1) {
      //       toast.success("Registration successful");
      //       this.props.history.push('/quora');
      //     } else {
      //       toast.error(data.msg);
      //     }
      //   });
    }
  }

  render() {
    const { formType, userEmail, password, userName, is_showpass } = this.state;
    return (
      <>
      <div className="container">
  <div className="login-register-box">
    <div className="tab-container">
      <button
        className={`tab ${formType === 'login' ? 'active' : ''}`}
        onClick={() => this.toggleForm('login')}
      >
        Login
      </button>
      <button
        className={`tab ${formType === 'register' ? 'active' : ''}`}
        onClick={() => this.toggleForm('register')}
      >
        Register
      </button>
    </div>
    <div className="form-container">
      {formType === 'login' ? (
        <div className="login-form">
          <h4 className="text-center">Login</h4>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Email Id"
            value={userEmail}
            onChange={(e) => this.setState({ userEmail: e.target.value })}
          />
          <div className="password-field">
            <input
              type={is_showpass ? "text" : "password"}
              className="form-control"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => this.setState({ password: e.target.value })}
            />
            <i
              className="fa fa-eye show-password"
              onClick={this.handleObscure}
            />
          </div>
          <button
            className="btn btn-primary mt-4"
            onClick={this.handleSubmit}
          >
            Login
          </button>
        </div>
      ) : (
        <div className="register-form">
          <h4 className="text-center">Register</h4>
          <input
            type="text"
            className="form-control"
            placeholder="Enter UserName"
            value={userName}
            onChange={(e) => this.setState({ userName: e.target.value })}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Enter Email Id"
            value={userEmail}
            onChange={(e) => this.setState({ userEmail: e.target.value })}
          />
          <div className="password-field">
            <input
              type={is_showpass ? "text" : "password"}
              className="form-control"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => this.setState({ password: e.target.value })}
            />
            <i
              className="fa fa-eye show-password"
              onClick={this.handleObscure}
            />
          </div>
          <button
            className="btn btn-primary mt-4"
            onClick={this.handleSubmit}
          >
            Register
          </button>
        </div>
      )}
    </div>
  </div>
</div>
 <ToastContainer />
      </>
    );
  }
}

export default withRouter(
  connect(null, {
    login_action,
    // register_action, // Ensure you have an action for registration
  })(Login)
);
