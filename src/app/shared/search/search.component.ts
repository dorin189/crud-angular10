import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {debounceTime, distinctUntilChanged, map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchInput: FormControl = new FormControl();

  @Output()
  searchValue: EventEmitter<string> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
    this.searchInput.valueChanges.pipe(
      startWith(''),
      debounceTime(200),
      distinctUntilChanged(),
      map((value) => {
        return value.toLowerCase();
      })
    )
      .subscribe((value) => {
      this.searchValue.emit(value);
    });
  }

}
