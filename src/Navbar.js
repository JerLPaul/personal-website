import { Link } from 'react-router-dom';
import './App.css';

export default function Navbar() {
    const imgPath = process.env.PUBLIC_URL + '/';
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/" className="navbtn">Home</Link>
                </li>
                <li><Link to="/About" className="navbtn">About</Link></li>
                <li><Link to="/Projects" className="navbtn">Projects</Link></li>
                <li><Link to="/Contact" className="navbtn">Contact Me</Link></li>
                <li style={{marginLeft: 'auto'}}>
                    <a href="https://github.com/JerLPaul" className="navbtn">
                        <img src={imgPath + "github-mark.svg"} alt="Github"></img>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/jerrell-paul-478611262/" className="navbtn">
                        <img src={imgPath + "linkedin-svgrepo-com.svg"} alt="LinkedIn"></img>
                    </a>
                </li>
            </ul>
        </nav>
    );
    
}