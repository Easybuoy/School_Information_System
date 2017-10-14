import { Component, OnInit } from '@angular/core';
import { StudentService } from "../student.service";
import { Student } from "../student";
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
  providers: [StudentService]
})
export class StudentsComponent implements OnInit {

  constructor(private studentService: StudentService) { }
  students: Student[];
  student: Student;
  surname: string;
  first_name: string;
  middle_name: string;
  age: number;
  email: string;
  address: string;
  gender: string;
  phone: string;

  ngOnInit() {
    this.studentService.getStudents()
      .subscribe( students => this.students = students)
  }

}
