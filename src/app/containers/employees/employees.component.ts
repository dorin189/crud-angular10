import {Component, OnInit} from '@angular/core';
import {map} from 'rxjs/operators';
import {Employee, EmployeeService} from '../../shared/services/employee.service';
import {ModalService} from '../../shared/modal/service/modal.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  keyword = '';
  employees: Employee[] = [];

  constructor(
    private employeeService: EmployeeService,
    private modalService: ModalService ) {

  }

  ngOnInit(): void {
    this.getAllEmployees();
  }

  keywordHandler(value: string): void {
    this.keyword = value;
  }

  private getAllEmployees(): void {
    this.employeeService.getEmployees().pipe(
      map(
        (response: Employee[]) => {
          return response.sort((prev: Employee, current: Employee) => {
            if (prev.FirstName < current.FirstName) {
              return -1;
            }
            return 1;
          });
        }
      )
    ).subscribe((response) => {
      this.employees = response;
    }, (error) => console.log(error));
  }

  delete(id: string): void {
    const currentEmployee = this.employees.find(
      (employee: Employee) => employee.Id === id);

    const title = 'Delete Employee';
    const deleteText = `Are you sure that you want to remove <b>${currentEmployee.FirstName} ${currentEmployee.SecondName}?</b>`;

    const modal = this.modalService.openModal(title, deleteText, id);
    modal.delete.subscribe((identifier) => {
      const remainingEmployees = this.employeeService.deleteEmployee(identifier);
      // @ts-ignore
      this.employees = remainingEmployees;
      this.modalService.closeModal();
    });

    modal.cancel.subscribe(() => {
      this.modalService.closeModal();
    });
  }
}
