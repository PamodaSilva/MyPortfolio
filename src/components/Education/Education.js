import React, { Component } from 'react';
import classes from './Education.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import { MdSchool } from 'react-icons/md';
/*import { MdWork } from 'react-icons/md';*/
import { FaSchool } from 'react-icons/fa';

class Education extends Component {
    render() {
        return (
            <div className={classes.box} id="education">
                <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2} animateOnce={true} initiallyVisible={true}>
                    <span className={classes.head}><i> MY JOURNEY </i></span>
                    <section className={classes.container}>
                        <div className={classes.container_content}>
                            <div className={classes.row}>
                                <div className={classes.row_md_12}>
                                    <div className={classes.timeline_centered}>
                                        <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                            <article className={classes.timeline_entry}>
                                                <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`} >
                                                    <MdSchool />
                                                </div>
                                                <div className={classes.label}>
                                                    <h2> University <span> 2019-Present</span></h2>
                                                    <p> I am a <b>student</b> at <a target="_blank" href="https://www.sjp.ac.lk/" rel="noopener noreferrer"> 
                                                    <b>University Of Sri Jayewardenepura. </b> </a> 
                                                        I am still studying for my degree in Bsc(Hons) Information and Communication Technology.
                                                    </p>
                                                </div>
                                            </article>
                                        </ScrollAnimation>
                                        <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                            <article className={classes.timeline_entry}>
                                                <div className={classes.timeline_icon} >
                                                    <MdSchool />
                                                </div>
                                                <div className={classes.label}>
                                                    <h2 > Diploma Course <span> July 2020 </span></h2>
                                                    <p>I completed <i>Diploma in Software Engineering</i> from 
                                                        <a target="_blank" href='https://esoft.lk/' rel="noopener noreferrer"> <b> Esoft Metro Campus. </b> </a> 
                                                        <i> (Esoft Metro Campus is a Pearson Assured organisation)</i>
                                                    </p>
                                                </div>
                                            </article>
                                        </ScrollAnimation>
                                        <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                            <article className={classes.timeline_entry}>
                                                <div className={`${classes.timeline_icon} ${classes.timeline_icon_2}`} >
                                                    <MdSchool />
                                                </div>
                                                <div className={classes.label}>
                                                    <h2 > Diploma Course <span> April 2019 </span></h2>
                                                    <p>I completed <i>Diploma in Information technology</i> from 
                                                        <a href='https://esoft.lk/' target="_blank" rel="noopener noreferrer"> <b>Esoft Metro Campus. </b> </a>
                                                        <i> (Esoft Metro Campus is a Pearson Assured organisation)</i>
                                                    </p>
                                                </div>
                                            </article>
                                        </ScrollAnimation>

                                        <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                            <article className={classes.timeline_entry}>
                                                <div className={`${classes.timeline_icon} ${classes.timeline_icon_6}`} >
                                                    <FaSchool />
                                                </div>
                                                <div className={classes.label}>
                                                    <h2 >School <span> 2005-2018 </span></h2>
                                                    <p>
                                                        I was a student of <a href='https://en.wikipedia.org/wiki/Kalutara_Balika_National_School/' rel="noopener noreferrer" target="_blank">Kalutara Balika National School.</a> 
                                                        I did my O/l Examination in 2015. I got Six A passes, One B pass and Two C passes. 
                                                        <b><i> (Information and Communication Technology - A)</i></b> <br/><br/>
                                                        I did my A/l Examination in 2018. I got One A pass and Two B passes. 
                                                        <b><i> (Information and Communication Technology - B)</i></b>
                                                    </p>
                                                </div>
                                            </article>
                                        </ScrollAnimation>

                                        <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                            <article>
                                                {/*<div className={`${classes.timeline_icon} ${classes.timeline_icon_4}`} >
                                                    <MdWork />
                                                </div>
                                                <div className={classes.label}>
                                                    <h2 >Internship</h2>
                                                    <p>Completed one month Internship in React Js with Internity Foundation</p>
                                                    </div>*/}
                                                <div className={classes.timeline_entry_inner}><div className={classes.timeline_icon_3 || classes.color_none}></div></div>
                                            </article>
                                        </ScrollAnimation>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </ScrollAnimation>
            </div>

        )
    }
}

export default Education;
