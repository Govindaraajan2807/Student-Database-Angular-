import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Course } from '../course';
import { Gender } from '../gender';
import { Hobbies } from '../hobbies';
import { Qualification } from '../qualification';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  
  course=Course;
  hobbie=Hobbies;
  qualification=Qualification
  gender = Gender;
  newStudent!: Student;

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
  }

  createStudent(form: NgForm) {

    var qualification1: Set<Qualification>;
    var selectQualification = document.getElementsByClassName('qualificationClass')
    for (var i = 0; i < selectQualification.length; i++) {
      var d = (selectQualification[i] as HTMLInputElement).value
      qualification1.add(JSON.parse(d))
    }

    var hobbies: Set<Hobbies>;
    var selectHobbies = document.getElementsByClassName('hobbieName')
    for (var i = 0; i < selectHobbies.length; i++) {
      var d = (selectHobbies[i] as HTMLInputElement).value
      hobbies.add(JSON.parse(d))
    }


    this.newStudent = {
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      emailId:form.value.emailId,
      mobileNumber:form.value.mobileNumber,      
      gender: form.value.gender == "male" ? Gender.Male : Gender.Female,
      details:form.value.details,
      city:form.value.city,
      pinCode:form.value.pinCode,      
      state:form.value.state,            
      country: form.value.country,
      qualification:qualification1,
      hobbie: hobbies,
      course: form.value.course == "BCA" ? Course.BCA:Course.BA
    }

    this.studentService.addStudent(this.newStudent).subscribe(
      (response: Student) => {
      },
      (error: HttpErrorResponse) => {
      }
    )
  }
}
