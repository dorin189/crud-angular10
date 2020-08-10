import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {map, tap} from 'rxjs/operators';

export interface Employee {
  FirstName: string;
  SecondName: string;
  Position: string;
  Id: string;
  Details: string;
  Blocked: boolean;
  FullName: string;
}


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) {
  }

  getEmployees(): Observable<Employee[]> {
    const employees = JSON.parse(localStorage.getItem('employees')) || [];

    if (employees.length) {
      return of(employees);
    }
    return this.httpClient.get<Employee[]>('assets/data/employees.json').pipe(
      map((response: Employee[]) => {
        return response.map((employee: Employee) => {
          employee.FullName = `${employee.FirstName} ${employee.SecondName}`;
          return employee;
        });
      }),
      tap((response) => {
        localStorage.setItem('employees', JSON.stringify(response));
      }),
    );
  }

  deleteEmployee(id: string): void {
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    const employeePosition = employees.findIndex((item) => item.Id === id);

    employees.splice(employeePosition, 1);
    localStorage.setItem('employees', JSON.stringify(employees));

    return employees;
  }

  getEmployeeByUserId(id: string): Employee {
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    const employeePosition = employees.findIndex((item) => item.Id === id);

    const employee = employees.splice(employeePosition, 1);
    return employee[0];
  }

  updateEmployee(employee: Employee): void {
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    const employeePosition = employees.findIndex((item) => item.Id === employee.Id);

    employees[employeePosition].Position = employee.Position;

    localStorage.setItem('employees', JSON.stringify(employees));

  }
}


