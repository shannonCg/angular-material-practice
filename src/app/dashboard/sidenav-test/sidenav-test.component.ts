import { ConditionalExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatDrawerToggleResult, MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav-test',
  templateUrl: './sidenav-test.component.html',
  styleUrls: ['./sidenav-test.component.css']
})
export class SidenavTestComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
  }

  toggleSideNav(sideNav: MatSidenav): void{
    sideNav.toggle()
            .then((result: MatDrawerToggleResult) => {
               console.log(`選單狀況：${result}`);
            });
  }
}
