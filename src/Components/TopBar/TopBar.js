import './TopBar.scss';
import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { UserContext } from '../../App';

const TopBar = () => {
    const [ isAdmin, loggedInUser] = useContext(UserContext);
    return (
        <div className="topBar">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              {isAdmin && "WRITE"}
            </Link>
          </li>
                </ul>
            </div>
            <div className="topRight">
            {loggedInUser ? (
            <Link to="/login">
                <img className="topImg" src={loggedInUser.photoURL} alt="" />
            </Link>
            ) : (
                    <ul className="topList">
                        <li className="topListItem">
                        <Link className="link" to="/login">
                            LOGIN
                        </Link>
                        </li>
                    </ul>
            )}
            </div>
        </div>
    )
}

export default TopBar
