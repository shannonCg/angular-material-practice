import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-input-test',
  templateUrl: './input-test.component.html',
  styleUrls: ['./input-test.component.css']
})
export class InputTestComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private fb: FormBuilder
  ) { }

  name!: FormControl;
  
  country!: FormControl;
  countries$?: Observable<any[]>;
  
  majorTech!: FormControl;  
  majorTechs!: any;

  tel!: FormControl;
  pwdHide = true;
  
  ngOnInit(): void {
    this.name = this.fb.control('', [Validators.required, Validators.minLength(4)]);
    this.country = this.fb.control('');
    this.countries$ = this.country.valueChanges
                                  .pipe(
                                    // wait 300ms after each keystroke before considering the term
                                    debounceTime(300),
                                    // ignore new term if same as previous term
                                    distinctUntilChanged(),
                                    // switch to new search observable each time the term changes
                                    switchMap(v => this.searchCountry(v))
                                  );
    this.majorTech = this.fb.control('');
    this.majorTechs = this.getMajorTechList();
    this.tel = this.fb.control('', [Validators.required, Validators.maxLength(5)]);
  }

  private searchCountry(term: string): Observable<any[]>{
    return this.http.get<any[]>('assets/country.json')
                    .pipe(map(v => v.filter(c => c.name.indexOf(term)>= 0)));
  }

  private getMajorTechList(){
    return  [
      {
        name: '前端',
        items: ['HTML', 'CSS', 'JavaScript']
      },
      {
        name: '後端',
        items: ['C#', 'NodeJs', 'Go']
      }
    ];
  }

  highlightSearchCountry(countryName: string): any{
    const inputCountry = this.country.value;
    return countryName.replace(inputCountry, `<span style="font-weight: bold;background: yellow">${inputCountry}</span>`);
  }

  displayCountry(country: any){
    if(country){
      return `${country.name}/${country.code}`;
    }else{
      return '';
    }
  }

  getTelErrorMsg(): string{
    if(this.tel.hasError('required')){
      return '未填寫';
    }
    return this.tel.hasError('maxlength')? '最多只能填寫五個字':'';
  }
}
