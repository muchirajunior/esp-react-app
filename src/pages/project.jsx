import Table from '../components/projectTable';
import './style.scss'

function Project(props) {
   
    return (
        <div className='projects-page'>
            <div className='projects-page__header'>project name</div>
            <br /><br />
            <Table/>
        </div>
    );
}

export default Project;