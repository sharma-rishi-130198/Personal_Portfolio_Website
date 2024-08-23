import React, { useEffect, useState } from 'react';

const SkillList = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        fetch('/api/skills/')
            .then(response => response.json())
            .then(data => setSkills(data));
    }, []);

    return (
        <div>
            <h2>My Skills</h2>
            <ul>
                {skills.map(skill => (
                    <li key={skill.id}>
                        <strong>{skill.name}</strong>: {skill.proficiency}%
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SkillList;
