import React, {Component} from 'react';
import "./about.css";
import myPhoto from '../assets/images/mine.jpg';
class About extends Component {
    render() {
        return(
            
            <section id="about" className="section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2 className="section-heading light">About me</h2>                            
                        </div>
                        <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12 wow zoomIn animated">
                            <img alt="" className="rounded-circle img-mine mx-auto" src={myPhoto} />
                        </div>
                        <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12">
                            <h3 className="name">Saravanamani</h3>
                            <h4 className="font-thin">Front end Developer</h4>
                            <p className="text-muted">A self-taught, pragmatic individual with deep interests in developing great software and solving real problems.</p>
                            <p className="text-muted">Experience with all stages of the development cycle for a dynamic web projects. Well versed in numerous programming langs like HTML5, CSS3, JavaScript, JQuery, ANGULAR and ANGULAR JS . Strong background in project management and customer relations.</p>
                            <a className="download-resume-btn btn btn-yellow bounce animated" role="button" href="#" >Download Resume</a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}


export default About;