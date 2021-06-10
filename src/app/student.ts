import { Course } from "./course";
import { Gender } from "./gender";
import { Hobbies } from "./hobbies";
import { Qualification } from "./qualification";

export class Student {
    firstName!:string;

	lastName!:string;
	emailId!:string;

	mobileNumber!:string;

	gender!:Gender;

	hobbie!:Set<Hobbies>;

	qualification!:Set<Qualification>;

	course!:Course;

	details!:string;

	city!:string;

	pinCode!:string;

	state!:string;
	country!:string;
}
