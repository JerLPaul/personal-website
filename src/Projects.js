import './App.css';
import Navbar from './Navbar';

export default function Projects() {
    return (
        <div className="App">
            <div className="projContainer">
                <div className="projCard">
                    <h2>Project 1</h2>
                    <p>Project 1 description</p>
                </div>

                <div className="projCard">
                    <h2>Project 2</h2>
                    <p>Project 2 description</p>
                </div>
            </div>
        </div>
    );
}