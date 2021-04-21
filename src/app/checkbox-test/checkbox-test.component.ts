import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-checkbox-test',
  templateUrl: './checkbox-test.component.html',
  styleUrls: ['./checkbox-test.component.css']
})
export class CheckboxTestComponent implements OnInit {

  payForAll!: FormControl;
  selectedPayForAll!: boolean;

  payForBook!: FormControl;
  payForMusic!: FormControl;
  payForMovie!: FormControl;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.payForAll = this.fb.control(false);
    
    this.payForBook = this.fb.control(false);
    this.payForMusic = this.fb.control(false);
    this.payForMovie = this.fb.control(true);

    this._setSelectAllState();
  }

  checkAllChange(event: MatCheckboxChange){
    this.payForBook.setValue(event.checked);
    this.payForMusic.setValue(event.checked);
    this.payForMovie.setValue(event.checked);

    this._setSelectAllState();
  }

  payForChange(){
    this._setSelectAllState();
  }

  private _setSelectAllState(){
    const count = (this.payForBook.value?1:0)+(this.payForMusic.value?1:0)+(this.payForMovie.value?1:0);
    this.payForAll.setValue(count === 3);
    this.selectedPayForAll = count > 0 && count < 3;
  }
}
