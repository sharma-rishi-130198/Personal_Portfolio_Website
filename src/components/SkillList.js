import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'; 
import '../App.css'; 

const SkillList = () => {
    const [skills, setSkills] = useState([]);
    const [expanded, setExpanded] = useState(false);

    const fetchSkills = () => {
        fetch('http://localhost:8000/api/skills/')
            .then(response => response.json())
            .then(data => setSkills(data))
            .catch(error => console.error('Error fetching skills:', error));
    };

    const toggleSkills = () => {
        if (!expanded) {
            fetchSkills();
        }
        setExpanded(!expanded);
    };

    return (
        <div className="skill-list">
            <div className="component-header" onClick={toggleSkills} style={{ cursor: 'pointer' }}>
                <h2>Top Skills</h2>
                <FontAwesomeIcon 
                    icon={faChevronDown} 
                    className="icon" 
                    style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }} 
                />
            </div>
            {expanded && (
                <div className="skill-cards">
                    {skills.map(skill => (
                        <div className="skill-card" key={skill.id}>
                            <h3 className="skill-name">{skill.name}</h3>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SkillList;

