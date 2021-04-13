import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatStepperIntl } from '@angular/material/stepper';

@Injectable()
export class TwStepperIntl extends MatStepperIntl{
  optionalLabel = '非必填';
}

@Component({
  selector: 'app-stepper-test',
  templateUrl: './stepper-test.component.html',
  styleUrls: ['./stepper-test.component.css'],
  providers: [
    {provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}},
    {provide: MatStepperIntl, useClass: TwStepperIntl}
  ]
})
export class StepperTestComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.basicQuestions = this.fb.group({
      name: ['', Validators.required]
    });
    this.question = this.fb.group({
      q1: ['']
    });
    this.surveyForm = this.fb.group({
      basicQuestions: this.basicQuestions,
      question: this.question
    });
  }

  isLinear:boolean = false;
  
  basicQuestions:FormGroup = this.fb.group({});
  question:FormGroup = this.fb.group({});
  surveyForm:FormGroup = this.fb.group({});
}

