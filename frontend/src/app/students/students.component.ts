import { Component, OnInit } from '@angular/core';
import { StudentService } from "../student.service";
import { Student } from "../student";
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
  providers: [StudentService]
})
export class StudentsComponent implements OnInit {


  constructor(private studentService: StudentService) {  }
  students: Student[];
  student: Student;
  surname: string;
  first_name: string;
  middle_name: string;
  age: number;
  email: string ;
  address: string;
  gender: string;
  phone: string;

  addStudent(){
    const newStudent ={
      surname: this.surname,
    first_name: this.first_name,
    middle_name: this.middle_name,
    age: this.age,
    email: this.email,
    address: this.address,
    gender: this.gender,
    phone: this.phone
    }
    this.studentService.addStudent(newStudent)
      .subscribe(student => this.students.push(student));
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



}
