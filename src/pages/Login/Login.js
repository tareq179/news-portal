import React, { useContext, useRef } from 'react';
import { UserContext } from '../../App';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { useHistory, useLocation } from 'react-router';
import "./Login.scss";


const Login = () => {
    const [ setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
      const { displayName, email } = result.user;
      const signedInUser = { name: displayName, email }
      console.log(signedInUser);
      setLoggedInUser(signedInUser);
      storeAuthToken();
    }).catch(function (error) {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  }
  const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem('token', idToken);
        history.replace(from);
      }).catch(function (error) {
        // Handle error
      });
  }
    const userRef = useRef();
        const passwordRef = useRef();
        // const { dispatch, isFetching } = useContext(Context);

        const handleSubmit = async (e) => {
            e.preventDefault();
            // dispatch({ type: "LOGIN_START" });
            // try {
            // const res = await axios.post("/auth/login", {
            //     username: userRef.current.value,
            //     password: passwordRef.current.value,
            // });
            // dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
            // } catch (err) {
            // dispatch({ type: "LOGIN_FAILURE" });
            // }
        };
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input
                type="text"
                className="loginInput"
                placeholder="Enter your username..."
                ref={userRef}
                />
                <label>Password</label>
                <input
                type="password"
                className="loginInput"
                placeholder="Enter your password..."
                ref={passwordRef}
                />
                <button className="loginButton" type="submit" disabled={isFetching}>
                Login
                </button>
            </form>
            
            <button className="loginRegisterButton" onClick={handleGoogleSignIn}>
            <i className="topIcon fab fa-google-square"></i> Google
            </button>
        </div>
    )
}

export default Login
