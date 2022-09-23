import axios from "axios"

const STUDENT_BASE_REST_API_URL = 'http://localhost:8080/student';

class StudentService {
    getAllStudents() {
        return axios.get(STUDENT_BASE_REST_API_URL)
    }

    createStudent(student) {
        return axios.post(STUDENT_BASE_REST_API_URL, student)
    }

    deleteStudent(studentId) {
        return axios.delete(STUDENT_BASE_REST_API_URL + "/" + studentId)
    }
}

export default new StudentService();