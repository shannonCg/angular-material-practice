import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SidenavTestComponent } from './sidenav-test/sidenav-test.component';
import { SharedMaterialModule } from '../shared-material/shared-material.module';
import { ToolbarTestComponent } from './toolbar-test/toolbar-test.component';
import { ListTestComponent } from './list-test/list-test.component'

@NgModule({
  declarations: [SidenavTestComponent, ToolbarTestComponent, ListTestComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedMaterialModule
  ]
})
export class DashboardModule { }
