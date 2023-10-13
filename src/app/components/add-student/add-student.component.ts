import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.less']
})
export class AddStudentComponent implements OnInit{

  // SERVICES
  private studentFormBuilder : FormBuilder = inject(FormBuilder);

  studentForm!:FormGroup;

  addStudent(){

    try {
      
      const studentName = this.studentForm.get('studentName')?.value;
      const studentClass = this.studentForm.get('studentClass')?.value;
      
    } catch (error) {
      console.error(error);
      
    }

    
  }

  ngOnInit(): void {
    this.studentForm = this.studentFormBuilder.group({
      'studentName':['',Validators.required],
      'studentClass':['',Validators.required]
    })
  }
}
