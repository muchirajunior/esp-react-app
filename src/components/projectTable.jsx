import React, { useState } from 'react';
import './style.scss';

function Table(props) {
     var names=['pin 0','pin 1','pin 2','pin 3','pin 4','pin 5','pin 6','pin 7','pin 8'];
    const [value, setValue]= useState(false)
    const type='write';


    return (
        <div className='projects-table'>
            <table className='table table-dark table-striped table-hover' >
                <thead  >
                    <tr>
                        <th>PIN</th>
                        
                        <th>{type==='write' ? 'actions' : 'value' }</th>
                    </tr>
                </thead>
                <tbody>
                    { names.map((name)=> <tr key={names.indexOf(name)}>
                        <td>{name }</td>
                        <td> {type==='write' ? <button className='btn btn-warning' onClick={()=>setValue(!value)}> {value ? "on" :"off"} </button> : names.indexOf(name) } </td>
                    </tr>  ) }
                </tbody>
               
            </table>
            
        </div>
    );
}

export default Table;