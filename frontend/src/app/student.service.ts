import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
  import { Student } from './student';
  import 'rxjs/add/operator/map';

  @Injectable()
  export class StudentService {

  constructor(private http: Http) { }
    // retrieving students
    getStudents() {
      return this.http.get('api/students')
        .map(res => res.json());
    }

    // retrieve one student
    getOneStudent(id) {
      return this.http.get('api/student/' + id)
        .map(res => res.json());
    }

    // add student
  addStudent(newStudent) {
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.post('api/student', newStudent, { headers: headers })
        .map(res => res.json());
  }

  // delete student
  deleteStudent(id) {
      return this.http.delete('api/student/' + id)
        .map(res => res.json());
  }

  // update student
    updateStudent(id, body) {
    return this.http.put('api/student/' + id, body,'')
      .map(res => res.json());
    }
}
