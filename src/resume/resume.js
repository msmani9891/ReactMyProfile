import React, {Component} from 'react';
import "./resume.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faUserTie } from '@fortawesome/free-solid-svg-icons';
class Resume extends Component {
    render() {
        return(
            <section id="profile" className="section-padding profile">
                <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <h2 className="section-heading dark">Resume</h2>                    
                </div>
                <div className="col-md-12 col-md-offset-0">
					<ul className="timeline">
						<li className="timeline-heading text-center animate-box fadeInUp animated-fast">
							<div><h3>Work Experience</h3></div>
						</li>
						<li className="animate-box timeline-unverted fadeInUp animated-fast">
							<div className="timeline-badge"><FontAwesomeIcon icon={faGraduationCap}  size={"sm"}/></div>
							<div className="timeline-panel">
								<div className="timeline-heading">
									<h3 className="timeline-title">Senior Software Analyst</h3>
									<span className="company">Agilysys - 2020 - Current</span>
								</div>
								<div className="timeline-body">
									<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
								</div>
							</div>
						</li>
						<li className="timeline-inverted animate-box fadeInUp animated-fast">
							<div className="timeline-badge"><FontAwesomeIcon icon={faGraduationCap}  size={"sm"}/></div>
							<div className="timeline-panel">
								<div className="timeline-heading">
									<h3 className="timeline-title">Software Associate</h3>
									<span className="company">Cognizant Technolgy Associations - 2019 - 2020</span>
								</div>
								<div className="timeline-body">
									<p>Far far away, behind the word mountains, they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
								</div>
							</div>
						</li>
						<li className="animate-box timeline-unverted fadeInUp animated-fast">
							<div className="timeline-badge"><FontAwesomeIcon icon={faGraduationCap}  size={"sm"}/></div>
							<div className="timeline-panel">
								<div className="timeline-heading">
									<h3 className="timeline-title">UI Developer</h3>
									<span className="company">Seaant Web Technologies - 2015 - 2018</span>
								</div>
								<div className="timeline-body">
									<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
								</div>
							</div>
						</li>

						<br />
						<li className="timeline-heading text-center animate-box fadeInUp animated-fast">
							<div><h3>Education</h3></div>
						</li>
						<li className="timeline-inverted animate-box fadeInUp animated-fast">
							<div className="timeline-badge"><FontAwesomeIcon icon={faUserTie}  size={"sm"}/></div>
							<div className="timeline-panel">
								<div className="timeline-heading">
									<h3 className="timeline-title">Bachelors Degree</h3>
									<span className="company">Thangavelu Engineering College - 20010 - 2013</span>
								</div>
								<div className="timeline-body">
									<p>Far far away, behind the word mountains, they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
								</div>
							</div>
						</li>
						<li className="animate-box timeline-unverted fadeInUp animated-fast">
							<div className="timeline-badge"><FontAwesomeIcon icon={faUserTie}  size={"sm"}/></div>
							<div className="timeline-panel">
								<div className="timeline-heading">
									<h3 className="timeline-title">Diploma Course</h3>
									<span className="company">Arasan Ganesan Polytechnic College - 2008 - 2010</span>
								</div>
								<div className="timeline-body">
									<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
								</div>
							</div>
						</li>
						<li className="timeline-inverted animate-box fadeInUp animated-fast">
							<div className="timeline-badge"><FontAwesomeIcon icon={faUserTie}  size={"sm"}/></div>
							<div className="timeline-panel">
								<div className="timeline-heading">
									<h3 className="timeline-title">Higher Secondary</h3>
									<span className="company">Govt. Hr. Sec School - 2006 - 2008</span>
								</div>
								<div className="timeline-body">
									<p>Far far away, behind the word mountains, they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
								</div>
							</div>
						</li>						
			    	</ul>
				</div>
            </div>
            </div>
        </section>
        );
    }
}

export default Resume;