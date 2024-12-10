import React, { useEffect } from "react";
import "../css/About.css"

function About() {
    useEffect(() => {
        document.title = "Ed Cavallero | About";
    }, []);

    return (
        <section className="about">
            <img className="banner" src={`${process.env.PUBLIC_URL}/images/san-diego-landscape.jpg`} alt="" />
            <h1>About Ed</h1>
            <img className="profile" src={`${process.env.PUBLIC_URL}/images/Profile.jpg`} alt="" />

            <p className="bio">Hello, my name is Ed Cavallero, and I am a Software Development student pursuing an MS in Software Development at Boston University. Originally from Trieste, Italy, I bring a passion for creativity and problem-solving to the world of technology. <p></p>Proficient in C, Python, HTML, CSS, and JavaScript, I specialize in crafting intuitive, user-friendly websites and applications, and I love finding innovative ways to bring ideas to life through code and design.

            When I’m not coding, I enjoy playing guitar, hitting the golf course, and immersing myself in nature through fishing, hiking, and horseback riding. <p></p>Whether I’m collaborating on a team project or out on the trail, I’m always driven by curiosity and a desire to learn and grow.

            Let’s work together to create something exceptional!
            </p>
        </section>
    );
}

export default About