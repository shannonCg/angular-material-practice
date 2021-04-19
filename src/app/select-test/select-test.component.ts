import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-select-test',
  templateUrl: './select-test.component.html',
  styleUrls: ['./select-test.component.css']
})
export class SelectTestComponent implements OnInit {

  interest!: FormControl;
  job!: FormControl;
  eatTime!: FormControl;
  
  interestList = [
    {id: 1, name: '桌球'},
    {id: 2, name: '網球'},
    {id: 3, name: '羽球'}
  ];
  
  jobNestList = [
    {
      group: '電腦軟體',
      jobs: [
        {id: 1, name: '工程師'},
        {id: 2, name: '測試員'},
      ]
    },
    {
      group: '餐飲',
      jobs: [
        {id: 3, name: '廚師'},
        {id: 4, name: '服務員'},
      ]
    }
  ]

  eatTimeList = ['早餐', '中餐', '下午茶', '晚餐', '宵夜'];

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.interest = this.fb.control('');
    this.job = this.fb.control('');
    this.eatTime = this.fb.control([]);
  }

}
