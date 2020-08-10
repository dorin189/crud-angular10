import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  deleteText: string;

  @Input()
  id: string;

  @Output()
  delete: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  cancel: EventEmitter<null> = new EventEmitter<null>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onDelete(): void {
    this.delete.emit(this.id);
  }

  onCancel(): void{
    this.cancel.emit(null);
  }

}
