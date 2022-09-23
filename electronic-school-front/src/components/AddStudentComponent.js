import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import StudentService from '../services/StudentService'

const AddStudentComponent = () => {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [grade, setGrade] = useState('')
    const history = useNavigate();

    const saveStudent = (e) => {
        e.preventDefault();

        const student = {name, surname, grade}

        StudentService.createStudent(student).then((response) => {
            console.log(response.data)

            history('/student');
        }).catch(error => {
            console.log(error)
        })
    }

  return (
    <div>
        <br></br>
        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h2 className='text-center'> Add Student </h2>
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-lebel'> Name: </label>
                                <input
                                    type = "text"
                                    placeholder='Enter name'
                                    name='name'
                                    className='form-control'
                                    value={name}
                                    onChange = {(e) => setName(e.target.value)}>
                                    </input>
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-lebel'> Surname: </label>
                                <input
                                    type = "text"
                                    placeholder='Enter surname'
                                    name='surname'
                                    className='form-control'
                                    value={surname}
                                    onChange = {(e) => setSurname(e.target.value)}>
                                    </input>
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-lebel'> Grade: </label>
                                <input
                                    type = "text"
                                    placeholder='Enter grade'
                                    name='grade'
                                    className='form-control'
                                    value={grade}
                                    onChange = {(e) => setGrade(e.target.value)}>
                                    </input>
                            </div>

                            <button className='btn btn-success' onClick={(e) => saveStudent(e)}> Submit </button>
                            <Link to="/student" className='btn btn-danger'> Cancel </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddStudentComponent