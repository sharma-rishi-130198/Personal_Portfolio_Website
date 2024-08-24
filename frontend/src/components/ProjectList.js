import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'; 
import '../App.css'; 

const ProjectList = () => {
    const [projects, setProjects] = useState([]);
    const [expanded, setExpanded] = useState(false);

    const fetchProjects = () => {
        fetch('http://localhost:8000/api/projects/')
            .then(response => response.json())
            .then(data => setProjects(data))
            .catch(error => console.error('Error fetching projects:', error));
    };

    const toggleProjects = () => {
        if (!expanded) {
            fetchProjects();
        }
        setExpanded(!expanded);
    };

    return (
        <div className="project-list">
            <div className="component-header" onClick={toggleProjects} style={{ cursor: 'pointer' }}>
                <h2>Projects</h2>
                <FontAwesomeIcon 
                    icon={faChevronDown} 
                    className="icon" 
                    style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }} 
                />
            </div>
            {expanded && (
                <div className="project-cards">
                    {projects.map(project => (
                        <div className="project-card" key={project.id}>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <p className="project-technologies"><strong>Technologies:</strong> {project.technologies}</p>
                            <div className="project-links">
                                <a href={project.github_link} target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faGithub} size="lg" /> 
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProjectList;
