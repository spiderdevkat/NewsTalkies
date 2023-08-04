import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from "../AuthContext";


const Navbar = ({ signIn })=>{
  const { isLoggedIn, user } = useAuth();
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">NewsTalkies</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item"> <Link className="nav-link" to="/business">Business</Link></li>
                    <li className="nav-item"> <Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                    <li className="nav-item"> <Link className="nav-link" to="/general">General</Link></li>
                    <li className="nav-item"> <Link className="nav-link" to="/health">Health</Link></li>
                    <li className="nav-item"> <Link className="nav-link" to="/science">Science</Link></li>
                    <li className="nav-item"> <Link className="nav-link" to="/sports">Sports</Link></li>
                    <li className="nav-item"> <Link className="nav-link" to="/technology">Technology</Link></li>
                </ul>
                {isLoggedIn ? (
          <div className="navbar-brand">Hello, {user?.username}</div> // Display the username from the user state
        ) : (
          <Link className="navbar-brand" to="/login">Login</Link>
        )}
                </div>
            </div>
        </nav>
      </div>
    )
}

export default Navbar
