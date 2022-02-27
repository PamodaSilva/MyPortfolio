import React, { Component } from 'react'
import classes from './Interest.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import Pic01 from '../images/Pic01.png';
import Pic02 from '../images/Pic02.png';
import Pic03 from '../images/Pic03.png';

class Interest extends Component {
  render() {
    return (
      <div className={classes.box} id="interest">
        <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
          <span className={classes.head}><i> WHAT I DO? </i></span>
          <h2 className={classes.heading}>HERE ARE SOME OF MY EXPERTISE</h2>
          <div className={classes.Interest}>
            <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
              <div className={classes.design}>
                <h3>  Design </h3>
                <p>{/*I also have knowledge of flutter development and have experience in building android and IOS applications. 
                  I also have live app published on Google Play Store.*/}
                  I also have knowledge of XD and Figma in design UI. 
                  And also have Adobe Photoshop, Adobe Illustrator, Adobe Premiere Pro </p>
                  <br/>
                  <img src={Pic01} />
              </div>
            </ScrollAnimation>
            <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
              <div className={classes.app}>
                <h3> App and web Development</h3>
                <p>I have knowledge in App and Web development. I build websites using HTML, CSS, Javascript, ReactJs. 
                  And also I build apps using React-native, Javascript. <br/>
                  I have knowledge SQL(MySQL) and NoSQL(MongoDb, Firebase)</p>
                  <br/>
                <img src={Pic02} />
              </div>
            </ScrollAnimation>
            <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
              <div className={classes.other}>
                <h3>Other's Interest</h3>
                <p> I develop programs with Python and Java. 
                  C#, Github are my other fields of interest. 
                  My Favorite programming language is Python. 
                 </p> <br/>
                  <img src={Pic03} />
              </div>
            </ScrollAnimation>
          </div>
        </ScrollAnimation>
      </div>
    )
  }
}

export default Interest;