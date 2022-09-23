package ElectronicSchool.controller;

import ElectronicSchool.model.Student;
import ElectronicSchool.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/student")
@CrossOrigin("*")
public class StudentController {
    @Autowired
    private StudentService studentService;

    @GetMapping
    List<Student> findAll() {
        return studentService.getStudents();
    }

    @PostMapping
    Student insert(@RequestBody Student student) {
        System.out.println(student);
        return studentService.addStudent(student);
    }

    @DeleteMapping
    @RequestMapping("{id}")
    String delete(@PathVariable int id) {
        System.out.println(id);
        return studentService.deleteStudent(id);
    }
}
