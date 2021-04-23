import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonTestComponent } from './button-test/button-test.component';
import { CheckboxTestComponent } from './checkbox-test/checkbox-test.component';
import { DatepickerTestComponent } from './datepicker-test/datepicker-test.component';
import { IconTestComponent } from './icon-test/icon-test.component';
import { InputTestComponent } from './input-test/input-test.component';
import { RadioTestComponent } from './radio-test/radio-test.component';
import { SelectTestComponent } from './select-test/select-test.component';
import { StepperTestComponent } from './stepper-test/stepper-test.component';

const routes: Routes = [
  {path: 'icon', component: IconTestComponent},
  {path: 'button', component: ButtonTestComponent},
  {path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  {path: 'stepper', component: StepperTestComponent},
  {path: 'input', component: InputTestComponent},
  {path: 'datepicker', component: DatepickerTestComponent},
  {path: 'select', component: SelectTestComponent},
  {path: 'checkbox', component: CheckboxTestComponent},
  {path: 'radio', component: RadioTestComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
