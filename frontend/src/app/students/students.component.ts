import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
  providers: [StudentService]
})
export class StudentsComponent implements OnInit {


  constructor(public snackBar: MatSnackBar, private studentService: StudentService) {  }



  students: Student[];
  student: Student;
  surname: string;
  name: string;
  age: number;
  email: string ;
  address: string;
  gender: string;
  phone: string;
  department: string;
  course: string;
  level: string;
  year_enrolled: string;



  addStudent(){
    const newStudent ={
      surname: this.surname,
    name: this.name,
    age: this.age,
    email: this.email,
    address: this.address,
    gender: this.gender,
    phone: this.phone,
      department: this.department,
      course: this.course,
      level: this.level,
      year_enrolled: this.year_enrolled
    }
    this.studentService.addStudent(newStudent)
      .subscribe(student => {this.students.push(student)});
    this.studentService.getStudents()
      .subscribe( students => this.students = students);
  }




deleteStudent(id:any){
  var students = this.students;
  this.studentService.deleteStudent(id)
    .subscribe(data =>{
      if(data.n == 1){
        for(var i = 0; i <students.length;  i++){
          if(students[i]._id == id){
            students.splice(i,1);
          }
        }
      }
    })
}

  ngOnInit() {
    this.studentService.getStudents()
      .subscribe( students => this.students = students);
  }


  openSnackBar(message: string, action: string) {
    this.snackBar.open('How arrr yu', 'OK', {
      duration: 4000,
    });
  }

}
