export class Employee{
    employeeId: number;
    fullName: string;
    email: string;
    phone: string;
    gender: string;
    dateOfJoining: string;
    departmentId: string;
    designationId: string;
    employeeType: string;
    salary: number;

    constructor(){
        this.employeeId = 0;
        this.dateOfJoining='';
        this.departmentId='';
        this.designationId='';
        this.email='';
        this.employeeType='';
        this.fullName='';
        this.phone='';
        this.gender='';
        this.salary=0;
    }
}

export interface IEmployeeList{
    employeeId: number;
    fullName: string;
    email: string;
    phone: string;
    gender: string;
    dateOfJoining: string;
    employeeType: string;
    departmentName: string;
    designationName: string;
    salary: number;
}


export interface IDepartment{

        departmentId: number;
        departmentName: string;

}

export interface IDesignation{

        designationId: number;
        departmentId: number;
        designationName: string;

}