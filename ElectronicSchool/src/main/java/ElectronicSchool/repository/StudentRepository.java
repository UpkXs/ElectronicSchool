package ElectronicSchool.repository;

import ElectronicSchool.model.Student;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
public interface StudentRepository {
    @Select("SELECT * FROM student")
    List<Student> findAll();

    @Insert("INSERT INTO student(name, surname, grade) VALUES (  #{name}, #{surname}, #{grade})")
    void insert(Student student);

    @Delete("DELETE FROM student where id = #{id}")
    void delete(int id);
}
