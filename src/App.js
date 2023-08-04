import './App.css';

import React, {useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import Login from './components/Login';
import Signup from "./components/Signup"
import Home from "./components/Home"
import Discuss from './components/Discuss';
import { AuthProvider, useAuth } from "./AuthContext";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = ()=>{
  const pageSize=5;
  const apiKey="9f7972f9c6bc452ba644a79910b01d33";
  // apiKey=process.env.REACT_APP_NEWS_API;
  const[progress,setProgress] = useState(0);
  const { isLoggedIn, user } = useAuth();
    return (
      <div>
      <Router>
        <AuthProvider>
          <Navbar signIn={isLoggedIn ? user.username : null} />
          <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
          />
          <Routes>   
            <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey}  key="general" pageSize={pageSize} country="in"  category="general"/>} />
            <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey}  key="business" pageSize={pageSize} country="in" category="business"/>} />
            <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey}  key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>} />
            <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey}  key="general" pageSize={pageSize} country="in" category="general"/>} />
            <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey}  key="health" pageSize={pageSize} country="in" category="health"/>} />
            <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey}  key="science" pageSize={pageSize} country="in" category="science"/>} />
            <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey}  key="sports" pageSize={pageSize} country="in" category="sports"/>} />
            <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey}  key="technology" pageSize={pageSize} country="in" category="technology"/>} />
            <Route exact path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/discuss/:id" element={<Discuss />} />
          </Routes>
        </AuthProvider>
      </Router>
      </div>
    )
}
export default App;