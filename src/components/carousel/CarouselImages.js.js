import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel';
import classes from './CarouselImages.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "animate.css/animate.min.css";
import { GoProject } from 'react-icons/go'
import Hello from '../images/Hello.jpg'
import Pencil from '../images/Pencil.jpg'

class CarouselImages extends Component {
    render() {
        return (
            <div className={classes.carousel_container} id="start">
                {/* <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible ={true}> */}
                <Carousel className={classes.carousel} dynamicHeight infiniteLoop={true} interval={6000} useKeyboardArrows={true} transitionTime={1700} emulateTouch showArrows={false} autoPlay showStatus={false} showThumbs={false} >
                    <div className={classes.image_container} >
                        <img className={classes.image} src={Hello} alt="myImage" />
                        <div className={classes.h1}>
                            <h1 >I'm Pamoda</h1>
                            <h2 >Student at the University Of Sri Jayewardenepura.</h2>
                           { /*<a href="https://drive.google.com/file/d/1XwQYRl06QtuNPT8v4fHkbajk1ll9LTbi/view?usp=sharing" rel="opener noreferrer" target="_blank">VIEW CV   <FaArrowCircleDown /></a>*/}
                        </div>
                    </div>
                    <div className={classes.image_container}>
                        <img className={classes.image} src={Pencil} alt="myImage" />
                        <div className={classes.h2}>
                            <h1> I love building</h1>
                            <h1>THINGS!!</h1>
                            <a href="https://github.com/pamodarasangi" rel="noopener noreferrer" target="_blank">VIEW PROJECTS #Code   <GoProject /></a> <br/> <br/> <br/>
                            <a href="https://drive.google.com/drive/folders/1bmA77CcNf3SSxPGhBNDMC3BCLCXHGLey?usp=sharing" rel="noopener noreferrer" target="_blank">VIEW PROJECTS #Design  <GoProject /></a>
                        </div>
                    </div>
                </Carousel>
                {/* </ScrollAnimation> */}
            </div>
        )
    }
}
export default CarouselImages