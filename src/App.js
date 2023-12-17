import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';

function App() {
  return (
    <div class="App">
      <body class="App-body">
        <Navbar />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </body>
    </div>
  );
}

export default App;
