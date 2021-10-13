import React from 'react';
import { useHistory } from 'react-router';
import './style.scss';

function Table(props) {
     var names=['project 1','project 2','project 3','project 4','project 5','project 6','project 7','project 8','project 9','project 10'];
     const history= useHistory();

    return (
        <div className='projects-table'>
            <table className='table table-striped table-hover' >
                <thead  >
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    { names.map((name)=>  <tr onClick={()=>history.push('/')}  >
                        <td>{names.indexOf(name)}</td>
                        <td>{name }</td>
                         <td> <button className='btn btn-secondary'  >view</button> </td>
                    </tr>  ) }
                </tbody>
               
            </table>
            
        </div>
    );
}

export default Table;