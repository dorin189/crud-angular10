import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Employee} from '../../../shared/services/employee.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input()
  employee: Employee;

  @Output()
  deleteEmployee: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
  }

  deleteModal(id: string): void {
    this.deleteEmployee.emit(id);
  }



}
