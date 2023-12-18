import { Link } from 'react-router-dom';
import './App.css';

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/" className="navbtn">Home</Link>
                </li>
                <li><Link to="/about" className="navbtn">About</Link></li>
                <li><Link to="/projects" className="navbtn">Projects</Link></li>
            </ul>
        </nav>
    );
}

function box() {

}