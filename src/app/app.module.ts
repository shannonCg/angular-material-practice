import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonTestComponent } from './button-test/button-test.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { IconTestComponent } from './icon-test/icon-test.component';
import { SharedMaterialModule } from './shared-material/shared-material.module';
import { StepperTestComponent } from './stepper-test/stepper-test.component';
import { InputTestComponent } from './input-test/input-test.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchHighlightDirective } from './search-highlight.directive';
import { SafeHtmlPipe } from './safe-html.pipe';
import { DatepickerTestComponent } from './datepicker-test/datepicker-test.component';
import { SelectTestComponent } from './select-test/select-test.component';
import { CheckboxTestComponent } from './checkbox-test/checkbox-test.component';
import { RadioTestComponent } from './radio-test/radio-test.component';
import { SlideTestComponent } from './slide-test/slide-test.component';


@NgModule({
  declarations: [
    AppComponent,
    IconTestComponent,
    ButtonTestComponent,
    StepperTestComponent,
    InputTestComponent,
    SearchHighlightDirective,
    SafeHtmlPipe,
    DatepickerTestComponent,
    SelectTestComponent,
    CheckboxTestComponent,
    RadioTestComponent,
    SlideTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedMaterialModule,
    DashboardModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
