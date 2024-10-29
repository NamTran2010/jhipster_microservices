import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'department',
        data: { pageTitle: 'gatewayApp.employeeDepartment.home.title' },
        loadChildren: () => import('./employee/department/department.module').then(m => m.EmployeeDepartmentModule),
      },
      {
        path: 'job',
        data: { pageTitle: 'gatewayApp.employeeJob.home.title' },
        loadChildren: () => import('./employee/job/job.module').then(m => m.EmployeeJobModule),
      },
      {
        path: 'employee',
        data: { pageTitle: 'gatewayApp.employeeEmployee.home.title' },
        loadChildren: () => import('./employee/employee/employee.module').then(m => m.EmployeeEmployeeModule),
      },
      {
        path: 'job-history',
        data: { pageTitle: 'gatewayApp.employeeJobHistory.home.title' },
        loadChildren: () => import('./employee/job-history/job-history.module').then(m => m.EmployeeJobHistoryModule),
      },
      {
        path: 'document-type',
        data: { pageTitle: 'gatewayApp.employeeDocumentType.home.title' },
        loadChildren: () => import('./employee/document-type/document-type.module').then(m => m.EmployeeDocumentTypeModule),
      },
      {
        path: 'document',
        data: { pageTitle: 'gatewayApp.employeeDocument.home.title' },
        loadChildren: () => import('./employee/document/document.module').then(m => m.EmployeeDocumentModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
