package ElectronicSchool.service;

import ElectronicSchool.model.Student;
import ElectronicSchool.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {
    @Autowired
    private StudentRepository studentRepository;


    public List<Student> getStudents() {
        return studentRepository.findAll();
    }

    public Student addStudent(Student student) {
        studentRepository.insert(student);
        return student;
    }

    public String deleteStudent(int id) {
        studentRepository.delete(id);
        return "Deleted Student: " + id;
    }

}
