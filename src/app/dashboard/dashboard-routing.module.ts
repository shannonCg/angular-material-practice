import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTestComponent } from './list-test/list-test.component';
import { SidenavTestComponent } from './sidenav-test/sidenav-test.component';
import { ToolbarTestComponent } from './toolbar-test/toolbar-test.component';

const routes: Routes = [
  {path: '', component: SidenavTestComponent, children: [
    {path: 'toolBar', component: ToolbarTestComponent},
    {path: 'list', component: ListTestComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
