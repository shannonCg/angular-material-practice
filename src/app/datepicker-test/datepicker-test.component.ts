import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import * as moment from 'moment';

@Component({
  selector: 'app-datepicker-test',
  templateUrl: './datepicker-test.component.html',
  styleUrls: ['./datepicker-test.component.css']
})
export class DatepickerTestComponent implements OnInit {

  startDate = moment().subtract(1, 'months');
  minDate = moment().subtract(2, 'months');
  maxDate = moment();

  locale!: FormControl;
  birthday!: FormControl;
  exerciseRange!: FormGroup;
  buy!: FormControl;

  constructor(
    private fb: FormBuilder,
    private _adapter: DateAdapter<any>
  ) { }
  
  ngOnInit(): void {
    this.locale = this.fb.control('zh-tw');
    this.locale.valueChanges.subscribe(v => this.changeLocale(v));
    this.birthday = this.fb.control({value:'', disabled: true});
    this.exerciseRange = this.fb.group({
      start: '',
      end: ''
    });
    this.buy = this.fb.control('');
  }

  changeLocale(changedLocale: string){
    console.log(`locale: ${changedLocale}`);
    this._adapter.setLocale(changedLocale);
  }

  familyDayFilter(date: moment.Moment | null): boolean{
    const day = (date || moment()).day();
    return day !== 2 && day !== 0;
  }

  logDataInput(type: string, event: MatDatepickerInputEvent<moment.Moment>){
    console.log(`type: ${type}=> ${event.value}`);
  }
}
