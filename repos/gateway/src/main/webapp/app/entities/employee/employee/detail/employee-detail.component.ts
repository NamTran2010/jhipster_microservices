import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IEmployee } from '../employee.model';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'jhi-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss'],
})
export class EmployeeDetailComponent implements OnInit {
  employee: IEmployee | null = null;
  jobHistories: any[] = [];
  showJobHistory = false;

  constructor(protected activatedRoute: ActivatedRoute, private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ employee }) => {
      this.employee = employee;
    });
  }

  previousState(): void {
    window.history.back();
  }

  handleClick(): void {
    this.showJobHistory = !this.showJobHistory;
    if (!this.showJobHistory) {
      return;
    }

    const employeeId = this.employee?.id;
    if (employeeId) {
      this.employeeService.getJobHistoriesForEmployee(employeeId).subscribe(jobHistory => {
        this.jobHistories = jobHistory;
      });
    }
  }
}
