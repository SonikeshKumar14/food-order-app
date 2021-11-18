import React from 'react';
import AboutImage from '../../assets/masala.jpg';
import '../../styles/About.css';

function About() {
    return (
        <div className="about">
            <div className="aboutTop" style={{backgroundImage:`url(${AboutImage})`}}></div>
            <div className="aboutBottom">
                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium delectus ratione vero eos. Rem aliquid veniam ab necessitatibus, cum delectus ea animi soluta distinctio quas, enim minima aperiam corrupti porro cupiditate expedita modi assumenda in itaque. Quas maiores at laborum ad? Dolorem, autem? In dolorum repudiandae tempore eligendi, odio minima vitae facilis doloribus quos, animi nulla earum? Debitis ex officiis nemo ipsa asperiores placeat esse at sint. Optio officiis similique ullam commodi ducimus alias soluta repellat voluptatibus quo. Rem laudantium voluptatibus ex deleniti dolore officiis vero soluta cumque animi, impedit ducimus fugit excepturi quasi molestiae ratione, debitis alias eaque quos!</p>
            </div>
        </div>
    )
}

export default About
