import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-slide-test',
  templateUrl: './slide-test.component.html',
  styleUrls: ['./slide-test.component.css']
})
export class SlideTestComponent implements OnInit {

  isSendEmail!: FormControl;
  isSendLetter!: FormControl;
  isSendSMS!: FormControl;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.isSendEmail = this.fb.control(false);
    this.isSendLetter = this.fb.control(false);
    this.isSendSMS = this.fb.control(true);
  }

}
