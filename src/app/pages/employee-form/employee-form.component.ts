import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee, IDepartment, IDesignation } from '../../model/employee';
import { EmployeeService } from '../../services/employee.service';
import { AsyncPipe, NgFor } from '@angular/common';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  imports: [FormsModule, AsyncPipe, NgFor],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent {

  employeeObj: Employee= new Employee();

  employeeService= inject(EmployeeService);

  activatedRoute= inject(ActivatedRoute);

  deptList$: Observable<IDepartment[]>=new Observable<IDepartment[]>();

  designationList : IDesignation[]= [];

  editEmpId: number=0;

  constructor(){
    this.deptList$ = this.employeeService.getAllDeparment();
    this.activatedRoute.params.subscribe((res:any)=>{
      this.editEmpId=res.id;
      if(this.editEmpId!=0){
        this.getEmployeeById();
      }
    })
  }

  onUpdate(){
    this .employeeService.createNewEmployee(this.employeeObj).subscribe((res:Employee)=>{
      alert("Employee Updated")
    },error=>{
      alert("API Error" + error.error);
    })
  }

  getEmployeeById(){
    this.employeeService.getEmplpoyeeById(this.editEmpId).subscribe((res:Employee)=>{
      this.employeeObj=res;
      this.employeeObj.dateOfJoining=this.formatDatetoYMD(this.employeeObj.dateOfJoining);
      this.getDesignation();
    })
  }

  formatDatetoYMD(dateString: string): string {
    const date= new Date(dateString);
    const year = date.getFullYear();
    const month = ('0'+(date.getMonth() + 1)).slice(-2); 
    const day = ('0'+date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }

  onSaveEmployee(){
    this .employeeService.createNewEmployee(this.employeeObj).subscribe((res:Employee)=>{
      alert("Employee Created")
    },error=>{
      alert("API Error" + error.error);
    })
  }

  getDesignation(){
    this.employeeService.getDesignation(this.employeeObj.departmentId).subscribe((res:IDesignation[])=>{
      this.designationList=res;
    })
  }
}
