import logo from "./logo.svg";
import "./App.css";

import MyButton from "./component/function_button";
import AboutPage from "./component/function_about_page";
import Avartar from "./component/avartar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Codecademy !</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <h1 className="h1">Welcome to my app</h1>
        <MyButton />
      </div>
      <div>
        <AboutPage />
        <Avartar />
      </div>
    </div>
  );
}

export default App;
