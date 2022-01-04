# react-language-cards

# Getting Started with Create React App
    npx create-react-app react-language-cards
   
   cd react-language-cards
   npm start
## overview
![](src/assets/pro-pic-1.jpg)

## overview
![](src/assets/pro-pic-2.jpg)

## src/components/header/header.js

import React from "react";
import reactLogo from "../../assets/react.svg";
import "./header.css";

const Header = () => {
    return(
        <div className="logo-container">
            <img className="react-logo" src={reactLogo} alt=""/>
        </div>
    )
}

export default Header;

## src/components/header/header.css
.logo-container{
    margin: 10px 0;
}

.react-logo{
    height: 150px;
}

## App.js

import './App.css';
import Header from "./components/header/header"

function App() {
  return (
    <div className="main-container">
      <Header/>
    </div>
  );
}

export default App;
