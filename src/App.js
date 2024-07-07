import logo from './logo.svg';
import './App.css';

import { FaInstagram, FaLinkedin } from "react-icons/fa6";

import imgSebastianBonilla from "./Assets/imgSebastianBonilla.jpg";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <div>
          
          <div>
            {/* <img src='../src/Assets/imgSebastianBonilla.jpg' alt='SebastianBonilla'></img> */}
            {/* <img src="/imgSebastianBonilla.jpg"/> */}
            <img src={imgSebastianBonilla} style={{width: "40%"}}/>
          </div>

          <div>
            <h1>
              Sebastián Bonilla
            </h1>
          </div>

          <div>
            <h2>
              Software Developer
            </h2>
          </div>

          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </div>
          
        </div>

        <div>
        <FaInstagram />
        </div>

        <div>
        <FaLinkedin />
        </div>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
