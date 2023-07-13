import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './includes/header/header.component';
import { PromiseComponent } from './promises/promise/promise.component';
import { ObservablesComponent } from './observables/observables.component';
import { FromComponent } from './observables/from/from.component';
import { AllComponent } from './observables/all/all.component';
import { ObservableService } from './obervables.service';
import { IntervalComponent } from './observables/interval/interval.component';
import { OfComponent } from './observables/of/of.component';
import { FromOperatorComponent } from './observables/from-operator/from-operator.component';
import { CustomObervableComponent } from './observables/custom-obervable/custom-obervable.component';
import { MapOperatorComponent } from './observables/map-operator/map-operator.component';
import { PluckComponent } from './observables/pluck/pluck.component';
import { FilterComponent } from './observables/filter/filter.component';
import { TapComponent } from './observables/tap/tap.component';
import { TakeComponent } from './observables/take/take.component';
import { RetryComponent } from './observables/retry/retry.component';
import { HttpClientModule } from '@angular/common/http';
import { DebounceComponent } from './observables/debounce/debounce.component';
import { SubjectComponent } from './observables/subject/subject.component';
import { Comp1Component } from './comps/comp1/comp1.component';
import { Comp2Component } from './comps/comp2/comp2.component';
import { Comp3Component } from './comps/comp3/comp3.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PromiseComponent,
    ObservablesComponent,
    FromComponent,
    AllComponent,
    IntervalComponent,
    OfComponent,
    FromOperatorComponent,
    CustomObervableComponent,
    MapOperatorComponent,
    PluckComponent,
    FilterComponent,
    TapComponent,
    TakeComponent,
    RetryComponent,
    DebounceComponent,
    SubjectComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ObservableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
