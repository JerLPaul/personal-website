import './App.css';

export default function Home() {
    return (
        <div className="home">
            <section>
                <img className="profilePic" src="https://via.placeholder.com/150" alt="Picture" />

                <div className="text">
                    <h3>
                        Hi, I'm Jerrell Paul.
                    </h3>
                    <p>
                        I'm a third year Computer Science student at the University of Guelph. I'm interested in full stack development, web development, and machine learning.
                    </p>
                </div>
            </section>
            
            <section style={{flexDirection: 'column'}}>
                <div className="text" style={{width: "100%", height:"100%"}}>
                    <h2>
                        I am fluent in the following languages:
                    </h2>
                </div>
                <div className="text">
                    <img className="langIcon" src="https://via.placeholder.com/150" alt="C" />
                    <img className="langIcon" src="https://via.placeholder.com/150" alt="Java" />
                    <img className="langIcon" src="https://via.placeholder.com/150" alt="Python" />
                    <img className="langIcon" src="https://via.placeholder.com/150" alt="React" />
                    <img className="langIcon" src="https://via.placeholder.com/150" alt="Jquery" />
                </div>
            </section>
            

        </div>
    );
}