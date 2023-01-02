import React from "react";
import logo from "../../assests/images/CoachMe logo.png";
import {
  AiOutlineMail,
  AiOutlineEyeInvisible,
  AiOutlineEye,
  AiOutlineLogin
} from "react-icons/ai";
import { Main } from "./signup.styles";
import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [visible, setVisible] = useState(false);
  
 const handleVisible = () => {
  if(visible) {
    setVisible(false)
  }else {
    setVisible(true)
  }
 }

  return (
    <Main>
      <div className="input-holder">
      <img src={logo} alt="logo" style={{height: '100px'}} />
        <h2>signup to have an account</h2>
        <div className="form-holder">
          <form>
            <div className="input">
              <input type={"email"} placeholder="email" />
              <div className="input-icon">
                <AiOutlineMail size={"1.5rem"} color="black" />
              </div>
            </div>
            <div className="input">
              <input type={"text"} placeholder="name"/>
            </div>
            <div className="input">
              <input type={visible ? "text" : "password"} placeholder="password"/>
              <div className="input-icon" onClick={handleVisible}>
                {visible ? (
                  <AiOutlineEyeInvisible size={"1.5rem"} color="black" />
                ) : (
                  <AiOutlineEye size={"1.5rem"} color="black" />
                )}
              </div>
            </div>
            <div className="button">
              <input type={"submit"} value="signup"/>
              <div className="input-icon">
                <AiOutlineLogin size={"1.5rem"} color="black" />
              </div>
            </div>
          </form>
        </div>
        <div className="text-container">
       <p>already have an account?<Link to={'/create-account'}>login</Link></p>
      </div>
      </div>
      <div className="image-holder">
        <img src={logo} alt="logo" />
        <div className="write-holder">
          <p className="write">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, enim
            sint? Quas consequatur nostrum culpa tempore explicabo fuga
            dignissimos, nisi ipsa, fugiat architecto non et ullam nemo quo
            illum. Eius!
          </p>
        </div>
      </div>
    </Main>
  );
};

export default Signup;
