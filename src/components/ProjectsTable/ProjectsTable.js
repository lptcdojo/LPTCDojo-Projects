import React, { Component } from 'react';
import { chunk } from 'lodash';
import './ProjectsTable.css';
import { Container, Row, Col } from 'react-bootstrap'
import { ProjectCard } from 'components/ProjectCard'
import { default as config } from 'config.js'

class ProjectsTable extends Component{

    constructor(props){
        super(props)
        this.state = {
            isFetching: false,
            projects: []
        }
    }

    componentDidMount(){
        this.setState({...this.state, isFetching:true})
        fetch(config.api.projects)
        .then(results => {
            return results.json()
        }).then(data => {
            const rows = chunk(data, 3);
            this.setState({projects: rows});
        });
    }

    render(){
        return (
            <Container>
                {this.state.projects.map((cols) => (
                    <Row>
                        {cols.map((project) => (
                            <Col sm={12} md={4}>
                                <ProjectCard title={project.title} description={project.description} tags={project.tags} href={config.content + project.pdf_url} image={config.content + project.image_url}/>
                            </Col>
                        ))}
                    </Row>
                ))}
            </Container>
        )
    }

}

export default ProjectsTable
