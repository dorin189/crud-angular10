import {Component, OnInit, AfterViewChecked, ChangeDetectorRef} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Employee, EmployeeService} from '../../../shared/services/employee.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  employee: Employee;

  isChanged = false;
  employeePosition: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService,
    private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    const employeeId = this.route.snapshot.paramMap.get('id');

    // @ts-ignore
    this.employee = this.employeeService.getEmployeeByUserId(employeeId);
    this.employeePosition = this.employee.Position;
  }

  update(employee: Employee): void {
    console.log(this.employeePosition);
    this.employeeService.updateEmployee(employee);
    this.router.navigate(['employees']);
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewChecked(): void {
    setTimeout(() => {
      if (this.employee.Position.length === 0) {
        this.isChanged = false;
      }
      if (this.employee.Position.length > 0 && this.employeePosition !== this.employee.Position) {
        this.isChanged = true;
      }
    }, 200);
  }
}
