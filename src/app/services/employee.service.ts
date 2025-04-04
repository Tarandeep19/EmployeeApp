import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee, IDepartment, IDesignation, IEmployeeList } from '../model/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  apiUrl: string = "https://api.freeprojectapi.com/api/EmployeeApp/";

  constructor(private http: HttpClient) { }

  getAllEmplpoyees(): Observable<IEmployeeList[]>{
    return this.http.get<IEmployeeList[]>(`${this.apiUrl}GetEmployees`);
  }

  getEmplpoyeeById(id: number): Observable<Employee>{
    return this.http.get<Employee>(`${this.apiUrl}${id}`);
  }

  createNewEmployee(obj: Employee) :Observable<Employee>{
    return this.http.post<Employee>(this.apiUrl + "CreateEmployee",obj);
  }

  updateEmployee(obj: Employee) :Observable<Employee>{
    return this.http.post<Employee>(this.apiUrl + "UpdateEmployee",obj);
  }

  getAllDeparment(): Observable<IDepartment[]>{
    return this.http.get<IDepartment[]>(`${this.apiUrl}GetDepartments`);
  }

  deleteEmployeeById(id:number): Observable<IDepartment[]>{
    return this.http.delete<IDepartment[]>(`${this.apiUrl}DeleteEmployee?id=${id}`);
  }

  getDesignation(deptId: string): Observable<IDesignation[]>{
    return this.http.get<IDesignation[]>(`${this.apiUrl}GetDesignationsByDeptId?deptId=${deptId}`);
  }
}
