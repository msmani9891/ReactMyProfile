import React, { Component } from 'react';
import './portfolio.css';
import corestack from '../assets/images/portfolio/corestack.png';
import lynk from '../assets/images/portfolio/lynk.PNG';
import pc from '../assets/images/portfolio/pc.PNG';
import merlin from '../assets/images/portfolio/merlin.png';
import kendo from '../assets/images/portfolio/kendo.png';

class Portfolio extends Component{    
    
    
    render() {
        let portfolio = [{
            column: 4,
            image: corestack,
            name: "corestack",
            technologies: ["html5", "css3", "angular js"]
        },
        {
            column: 4,
            image: lynk,
            name: "Lynk",
            technologies: ["html5", "css3", "php"]
        },
        {
            column: 4,
            image: pc,
            name: "PrentCircle",
            technologies: ["html5", "css3", "Javascript"]
        },
        {
            column: 6,
            image: merlin,
            name: "IHS Health Audit",
            technologies: ["html5", "css3", "angular js"]
        },
        {
            column: 6,
            image: kendo,
            name: "Balenz",
            technologies: ["html5", "css3", "angular 6"]
        }
        ];
                
        const projects = portfolio.map(function(item){
            return (
                <div className="col-sm-4 col-md-6">
                <div className="portfolio">
                                <figure>
                                    <img src={item.image} alt={item.image} />
                                    <figcaption>
                                        <h5>{item.name}</h5>
                                        <ul className="list-group list-group-horizontal-sm">
                                        {item.technologies.map((technologies, index) =>
                                        item.technologies.length-1 !== index ? 
                                        <li key={index} className="list-group-item text-uppercase">{technologies},&nbsp;</li> :
                                        <li key={index} className="list-group-item text-uppercase">{technologies}</li>
                                        )}                                            
                                        </ul>
                                    </figcaption>
                                </figure>
                            </div>
                            </div>
            );
        })

        return(
            <section id="about" className="section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2 className="section-heading light">Portfolio</h2>                            
                        </div>
                        <div className="row">                        
                            {projects}                        
                        </div>
                    </div>
                </div>

                {/* <div class="row">

                </div> */}
            </section>
        );
    }
}

export default Portfolio;