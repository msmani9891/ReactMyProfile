import React, {Component} from 'react';
import "./profile.css";
class Profile extends Component {
    render() {
        return(
            <section id="profile" ref={this.ProfileRef} className="section-padding profile">
                <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <h2 className="section-heading dark">Skills</h2>
                    <h3>.</h3>
                </div>
                <div className="col-6 col-md-3 mb-3 mb-sm-5 skill">
                    <div className="c100 p75">
                        <span>75%</span>
                        <div className="slice">
                            <div className="bar"></div>
                            <div className="fill"></div>
                        </div>
                    </div>
                    <h6 className="text-center mt-2 mt-sm-4">html</h6>
                </div>
                <div className="col-6 col-md-3 mb-3 mb-sm-5 skill">
                    <div className="c100 p70">
                        <span>70%</span>
                        <div className="slice">
                            <div className="bar"></div>
                            <div className="fill"></div>
                        </div>
                    </div>
                    <h6 className="text-center mt-2 mt-sm-4">Javascript</h6>
                </div>
                <div className="col-6 col-md-3 mb-3 mb-sm-5 skill">
                    <div className="c100 p75">
                        <span>75%</span>
                        <div className="slice">
                            <div className="bar"></div>
                            <div className="fill"></div>
                        </div>
                    </div>
                    <h6 className="text-center mt-2 mt-sm-4">CSS</h6>
                </div>
                <div className="col-6 col-md-3 mb-3 mb-sm-5 skill">
                    <div className="c100 p70">
                        <span>70%</span>
                        <div className="slice">
                            <div className="bar"></div>
                            <div className="fill"></div>
                        </div>
                    </div>
                    <h6 className="text-center mt-2 mt-sm-4">JQUERY</h6>
                </div>
                <div className="col-6 col-md-3 mb-3 mb-sm-5 skill">
                    <div className="c100 p65">
                        <span>65%</span>
                        <div className="slice">
                            <div className="bar"></div>
                            <div className="fill"></div>
                        </div>
                    </div>
                    <h6 className="text-center mt-2 mt-sm-4">Angular JS</h6>
                </div>
                <div className="col-6 col-md-3 mb-3 mb-sm-5 skill">
                    <div className="c100 p60">
                        <span>60%</span>
                        <div className="slice">
                            <div className="bar"></div>
                            <div className="fill"></div>
                        </div>
                    </div>
                    <h6 className="text-center mt-2 mt-sm-4">Angular</h6>
                </div>
                <div className="col-6 col-md-3 mb-3 mb-sm-5 skill">
                    <div className="c100 p40">
                        <span>40%</span>
                        <div className="slice">
                            <div className="bar"></div>
                            <div className="fill"></div>
                        </div>
                    </div>
                    <h6 className="text-center mt-2 mt-sm-4">php</h6>
                </div>
                <div className="col-6 col-md-3 mb-3 mb-sm-5 skill">
                    <div className="c100 p10">
                        <span>10%</span>
                        <div className="slice">
                            <div className="bar"></div>
                            <div className="fill"></div>
                        </div>
                    </div>
                    <h6 className="text-center mt-2 mt-sm-4">React</h6>
                </div>
            </div>
            </div>
        </section>
        );
    }
}

export default Profile;