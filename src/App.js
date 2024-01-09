import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <div class="App">
        <body class="App-body">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </body>
        <footer class="App-footer">


        </footer>
      </div>
    </Router>
  );
}

export default App;
