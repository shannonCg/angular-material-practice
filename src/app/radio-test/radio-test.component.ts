import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-radio-test',
  templateUrl: './radio-test.component.html',
  styleUrls: ['./radio-test.component.css']
})
export class RadioTestComponent implements OnInit {

  lifeLike!: FormControl;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.lifeLike = this.fb.control('');
  }

}
