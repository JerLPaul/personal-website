import './App.css';
import Navbar from './Navbar';

export default function Projects() {
    return (
        <div className="App">
            <div className="projContainer">
                <div className="projCard">
                    <img src="https://via.placeholder.com/150" alt="Automator" />
                    <div className="projText">
                        <h2>Automator</h2>
                        <p>Automator is a web extension that replicates user interactions within web pages and creates reusable simulations</p>
                    </div>
                </div>

                <div className="projCard">
                    <img src="https://via.placeholder.com/150" alt="Spellchecker" />
                    <h2>Spellchecker</h2>
                    <p>This project is a multithreaded spellchecker.</p>
                </div>
            </div>
        </div>
    );
}