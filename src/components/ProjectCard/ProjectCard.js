import React from 'react'
import './ProjectCard.css'

function ProjectCard(props){
    return (
        <a className="project-card" href={props.href}>
            <img src={props.image} alt="banner" />
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
