import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Employee} from '../services/employee.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {

  @Input()
  employees: Employee[];

  @Input()
  keyword: string;

  @Output()
  deleteEmployee: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onDeleteEmployee(id: string): void {
    this.deleteEmployee.emit(id);
  }
}
