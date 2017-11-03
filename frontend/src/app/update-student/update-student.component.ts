import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import {MatSnackBar} from '@angular/material';

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css'],
  providers: [StudentService]
})
export class UpdateStudentComponent implements OnInit {



  constructor(public snackBar: MatSnackBar, private studentService: StudentService) { }
  student: Student;
  students = [];
  _id: string;
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

  updateStudent(id) {
    const students = this.students;
    this.studentService.updateStudent(this.students['_id'], this.students)
      // .subscribe(students => {this.students.concat(students)});
      .subscribe(data => {
        if (data.n == 1) {
          for (let i = 0; i < students.length;  i++) {
            if (students[i]._id == id) {
              students.push(i, 1);
            }
          }
        }
      });
  }


  ngOnInit() {
    this.studentService.getOneStudent( this._id)
      .subscribe( students => this.students = students);
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open('Student Updated Successfully', 'OK', {
      duration: 4000,
    });
  }
}
