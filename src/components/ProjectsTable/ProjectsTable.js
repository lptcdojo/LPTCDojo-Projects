import React, { Component } from 'react';
import './ProjectsTable.css';
import { Container, Row, Col } from 'react-bootstrap'
import { ProjectCard } from 'components/ProjectCard'

class ProjectsTable extends Component{

    render(){
        return (
            <Container>
                <Row>
                    <Col xs={12} md={4}>
                        <ProjectCard title="3D bug" description="Design a 3D printable insect with BlocksCAD" tags="3D printer, BlocksCad, Webbrowser"/>
                    </Col>
                    <Col xs={12} md={4}>
                        <ProjectCard title="3D key ring" description="Design a coder keyring that can be 3D printed" tags="3D printer, BlocksCad, Webbrowser"/>
                    </Col>
                    <Col xs={12} md={4}>
                        <ProjectCard title="3D pendant" description="Design a pendant" tags="3D printer, BlocksCad, Webbrowser"/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={4}>
                        <ProjectCard title="3D bug" description="Design a 3D printable insect with BlocksCAD" tags="3D printer, BlocksCad, Webbrowser"/>
                    </Col>
                    <Col xs={12} md={4}>
                        <ProjectCard title="3D key ring" description="Design a coder keyring that can be 3D printed" tags="3D printer, BlocksCad, Webbrowser"/>
                    </Col>
                    <Col xs={12} md={4}>
                        <ProjectCard title="3D pendant" description="Design a pendant" tags="3D printer, BlocksCad, Webbrowser"/>
                    </Col>
                </Row>
            </Container>
        )
    }

}

export default ProjectsTable
