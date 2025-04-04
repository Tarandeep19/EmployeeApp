import { Routes } from '@angular/router';
import { EmployeeListComponent } from './pages/employee-list/employee-list.component';
import { EmployeeFormComponent } from './pages/employee-form/employee-form.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'list',
        pathMatch:'full'
    },
    {
        path:'list',
        component:EmployeeListComponent,
        title:'Emp List',
    },
    {
        path:'new-employee',
        component:EmployeeFormComponent
    },
    {
        path:'edit-employee/:id',
        component:EmployeeFormComponent
    },
    {
        path:"**",
        component:NotFoundComponent
    }
];
