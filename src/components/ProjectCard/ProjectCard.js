import React from 'react'
import './ProjectCard.css'
import banner from 'images/banner.png'

function ProjectCard(props){
    return (
        <a className="project-card" href="#test">
            <img src={banner} />
            <div className="card-content">
                <span className="card-title">{props.title}</span>
                <p className="card-description">
                {props.description}
                </p>
                <span className="card-tags">{props.tags}</span>
            </div>
        </a>
    )
}

export default ProjectCard
