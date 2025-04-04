import { Component, inject, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee, IEmployeeList } from '../../model/employee';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  imports: [DatePipe],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {

  empService=inject(EmployeeService);

  employeeList: IEmployeeList[]=[];

  router= inject(Router);

  ngOnInit(): void {
    this.getEmployee();
  }
  
  getEmployee(){
    this.empService.getAllEmplpoyees().subscribe((res:IEmployeeList[])=>{
      this.employeeList=res;
    })
  }

  onEdit(id: number){
    this.router.navigateByUrl("/edit-employee/"+id);
  }

  onDelete(id: number){
    const isDelete=confirm("Are you sure you want to delete this employee?");
    if(isDelete){
      this.empService.deleteEmployeeById(id).subscribe((res:any)=>{
        alert("Employee deleted successfully.");
        this.getEmployee();
      })
    }
  }

}
