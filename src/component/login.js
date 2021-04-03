import React from "react";
import { auth, provider } from "../firebase";
import "./login.css";
import { actionType } from "../component/state/reducer";
import { useStateValue } from "../component/state/stateProvider";
import Logo from '../assect/imge/png/logo.png'
export default function Login() {
  const [user, dispatch] = useStateValue();

  const Signin = () => {
    auth.signInWithPopup(provider).then((result) => {
      dispatch({
        type: actionType.SET_USER,
        user: result.user,
      });
    });
  };
  return (
    <div className="login">
      <div className="login_container">
        <img
          className="login_image"
          src={Logo}
          alt="whatapp "
        />
        <h1>sign to Quiz</h1>
        <button onClick={Signin} className="login_button" type="sumit">
          sign with google
        </button>
      </div>
    </div>
  );
}
