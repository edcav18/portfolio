import React, { useEffect} from "react";
import "../css/About.css"

function About() {
    useEffect(() => {
        document.title = "Ed Cavallero | About";
      }, []);

    return (
        <section className="about">
            <h1>About Ed</h1>
        <img src="./images/Profile.jpg" className="profile" alt= {""}></img>
        <p>Hello, my name is Ed Cavallero and I am a Software Development student at Boston University.</p>
        </section>
    );
}

export default About