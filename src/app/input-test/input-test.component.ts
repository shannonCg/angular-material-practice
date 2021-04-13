import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, switchMap} from 'rxjs/operators';

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
  }

  private searchCountry(term: string): Observable<any[]>{
    return this.http.get<any[]>('assets/country.json')
                    .pipe(map(v => v.filter(c => c.name.indexOf(term)>= 0)));
  }

  highlightSearchCountry(countryName: string): any{
    const inputCountry = this.country.value;
    return countryName.replace(inputCountry, `<span style="font-weight: bold;background: yellow">${inputCountry}</span>`);
  }
}
