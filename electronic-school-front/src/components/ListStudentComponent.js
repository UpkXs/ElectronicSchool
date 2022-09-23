import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import StudentService from '../services/StudentService'

const ListStudentComponent = () => {
    const [students, setStudents] = useState([])

    useEffect(() => {
        getAllStudents();
    }, [])

    const getAllStudents = () => {
        StudentService.getAllStudents().then((response) => {
            setStudents(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }
    
    const deleteStudent = (studentId) => {
        StudentService.deleteStudent(studentId).then((response) => {
            getAllStudents();
        }).catch(error => {
            console.log(error);
        })
    }

  return (
    <div className="container">
        <br></br>
        <h2 className='text-center'>List Students</h2>
        <Link to = "/add-student" className='btn btn-primary mb-2'> Add Student </Link>
        <table className='table table-bordered table-striped'>
            <thead>
                <th> Student Id </th>
                <th> Student Name </th>
                <th> Student Surname </th>
                <th> Student Grade </th>
                <th> Actions </th>
            </thead>
            <tbody>
                {
                    students.map(
                        student =>
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.surname}</td>
                            <td>{student.grade}</td>
                            <td>
                                <button className='btn btn-danger' onClick={() => deleteStudent(student.id)}> Delete </button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    
    </div>
  )
}

export default ListStudentComponent