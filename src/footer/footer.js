import React, { Component } from 'react';
import './footer.css';
import { faGithub } from '@fortawesome/free-solid-svg-icons';
class Footer extends Component {
    render() {
        return(
            <div className="">
                <nav className="navbar navbar-footer navbar-expand-sm">
                    <div className="logofont">Saravanamani</div>        
                </nav>
            </div>
        );
    }
};

export default Footer;