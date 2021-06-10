import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  
  private baseURL = 'http://localhost:8080/student';

  constructor(private httpClient : HttpClient) { }

  addStudent(newStudent: Student) : Observable<Student>{
    return this.httpClient.post<Student>( `${this.baseURL}`,newStudent);
  }

}
