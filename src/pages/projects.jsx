import React from 'react';
import Table from '../components/table';
import './style.scss'

function Projects(props) {
    return (
        <div className='projects-page'>
            <div className='projects-page__header'> ALL Projects</div>
            <br />
            < Table />
            
        </div>
    );
}

export default Projects;