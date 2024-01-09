import './App.css';

export default function Projects() {
    return (
        <div className="App">
            <div className="projContainer">
                <div className="projCard">
                    <img src="https://via.placeholder.com/150" alt="Automator" />
                    <div className="text">
                        <h2>Automator</h2>
                        <p>
                            Automator is a web extension that replicates user interactions within web pages 
                            and creates reusable macros and scripts to simplify and automate user workflows.
                        </p>
                    </div>
                </div>

                <div className="projCard">
                    <img src="https://via.placeholder.com/150" alt="Spellchecker" />
                    <div className="text">
                        <h2>Spellchecker</h2>
                        <p>
                            I created a multithreaded spellchecker system which can suggest the closest word given a dictionary.
                            The system can utilize custom dictionaries and can be used to spellcheck multiple files at once.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}