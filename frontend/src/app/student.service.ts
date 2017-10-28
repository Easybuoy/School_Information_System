import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
  import { Student } from './student';
  import 'rxjs/add/operator/map';

  @Injectable()
  export class StudentService {

  constructor(private http: Http) { }
    // retrieving students
    getStudents() {
      return this.http.get('http://localhost:3000/api/students')
        .map(res => res.json());
    }

    // retrieve one student
    getOneStudent(id) {
      return this.http.get('http://localhost:3000/api/student/' + id)
        .map(res => res.json());
    }

    // add student
  addStudent(newStudent) {
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.post('http://localhost:3000/api/student', newStudent, { headers: headers })
        .map(res => res.json());
  }

  // delete student
  deleteStudent(id) {
      return this.http.delete('http://localhost:3000/api/student/' + id)
        .map(res => res.json());
  }

  // update student
    updateStudent(id) {
    return this.http.put('http://localhost:3000/api/student/' + id,'','')
      .map(res => res.json());
    }
}
