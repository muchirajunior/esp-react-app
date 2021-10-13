import React from 'react';
import './style.scss'
import Swal from 'sweetalert2'
import { useHistory } from 'react-router';

function Form(props) {
 const history= useHistory()
    async function submit(){

       await Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your response have been saved',
            showConfirmButton: false,
            timer: 1500
          })

        history.push('/projects')
     }

    return (
        <div className='create-form'>
            Create a New project
            <br />
            <br />
            <label htmlFor="name">project name</label>
            <input type="text" name='name' maxLength='40' className='create-form__input' placeholder='name' />
            <br />
            <p>project type</p>
            <select name="type" id="" className='create-form__input' >
                <option value="" selected={true} disabled  >select type </option>
                <option value="">type 1</option>
                <option value="">type 2</option>
                <option value="">type 3</option>
            </select>
            <br />
            <br />
            <button className='create-form__button' onClick={()=>submit()} >create</button>
        </div>
    );
}

export default Form;