import React, { Component } from 'react'
import classes from './About.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

class About extends Component {
    render() {
        return (
            <div className={classes.box} id="about">
                <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                    <span className={classes.head}> <i> ABOUT ME </i> </span>
                    <h2 className={classes.heading}>Who Am I?</h2>
                    <div className={classes.About}>
                        <p> My name is <b>PAMODA RASANGI</b> and I am a student at <a target="_blank" rel="noopener noreferrer" href="https://www.sjp.ac.lk/"><b> University Of Sri Jayewardenepura</b></a>.
                         I am still studying for my degree in Bsc(Hons) Information and Communication Technology.  
                         I am much interested in designing and developing new things which excite me a lot.  </p>
                        <p className={classes.br}>I love exploring new technologies and creative designs , 
                            I like to stay on top of latest trends. I most like to try new designs and also like coding.
                        </p>
                    </div>
                </ScrollAnimation>
            </div>
        )
    }
}

export default About;