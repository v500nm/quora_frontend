import React, { Component } from "react";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  login_action,
  register_action,
} from "../../actions/user_login_auth_actions/user_login_auth_action";
import { withRouter } from "../../utils/withRouter";
import Loader from "../../utils/Loader";
import {
  emailValidator,
  loginPasswordValidator,
  confirmPasswordValidator,
} from "../../utils/Validator";
import "./login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formType: "login", // or 'register'
      Email: "",
      Password: "",
      UserName: "",
      confirmPassword: "",
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

  async handleSubmit() {
    const { formType, Email, Password, UserName, confirmPassword } = this.state;
    const emailError = emailValidator(Email);
    const passwordError = loginPasswordValidator(Password);
    
    if (formType === "register") {
      const confirmPasswordError = confirmPasswordValidator(Password, confirmPassword);
      if (emailError || passwordError || confirmPasswordError) {
        toast.error(emailError || passwordError || confirmPasswordError);
        return;
      }
    } else {
      if (emailError || passwordError) {
        toast.error(emailError || passwordError);
        return;
      }
    }
  
    this.setState({ isLoading: true });
  
    try {
      if (formType === "login") {
        const data = await this.props.login_action(Email, Password);
        if (data.error !== 1) {
          sessionStorage.setItem("Email", data.data[0].Email);
          sessionStorage.setItem("UserID", data.data[0].UserID);
          sessionStorage.setItem("UserName", data.data[0].Username); 
          sessionStorage.setItem("RoleID", data.data[0].RoleID);
          this.props.navigate("/home"); 
        } else {
          toast.error(data.msg);
        }
      } else if (formType === "register") {
        const data = await this.props.register_action(UserName, Email, Password);
        if (data.error !== 1) {
          toast.success("Registration successful");
          this.setState({ formType: 'login' });
        } else {
          toast.error(data.msg);
        }
      }
    } catch (err) {
      toast.error(err.message || "An error occurred");
    } finally {
      this.setState({ isLoading: false });
    }
  }
  

  render() {
    const { formType, Email, Password, UserName, confirmPassword, is_showpass, isLoading } = this.state;

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
                    value={Email}
                    onChange={(e) => this.setState({ Email: e.target.value })}
                  />
                  <div className="password-field">
                    <input
                      type={is_showpass ? "text" : "password"}
                      className="form-control"
                      placeholder="Enter Password"
                      value={Password}
                      onChange={(e) => this.setState({ Password: e.target.value })}
                    />
                    <i
                      className="fa fa-eye show-password"
                      onClick={this.handleObscure}
                    />
                  </div>
                  <button
                    className="btn btn-primary mt-4"
                    onClick={this.handleSubmit}
                    disabled={isLoading}
                  >
                    {isLoading ? <Loader /> : "Login"}
                  </button>
                </div>
              ) : (
                <div className="register-form">
                  <h4 className="text-center">Register</h4>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter UserName"
                    value={UserName}
                    onChange={(e) => this.setState({ UserName: e.target.value })}
                  />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Email Id"
                    value={Email}
                    onChange={(e) => this.setState({ Email: e.target.value })}
                  />
                  <div className="password-field">
                    <input
                      type={is_showpass ? "text" : "password"}
                      className="form-control"
                      placeholder="Enter Password"
                      value={Password}
                      onChange={(e) => this.setState({ Password: e.target.value })}
                    />
                    <i
                      className="fa fa-eye show-password"
                      onClick={this.handleObscure}
                    />
                  </div>
                  <input
                    type={is_showpass ? "text" : "password"}
                    className="form-control"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => this.setState({ confirmPassword: e.target.value })}
                  />
                  <button
                    className="btn btn-primary mt-4"
                    onClick={this.handleSubmit}
                    disabled={isLoading}
                  >
                    {isLoading ? <Loader /> : "Register"}
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
    register_action,
  })(Login)
);
