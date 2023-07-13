import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromiseComponent } from './promises/promise/promise.component';
import { ObservablesComponent } from './observables/observables.component';
import { AllComponent } from './observables/all/all.component';
import { FromComponent } from './observables/from/from.component';
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
import { DebounceComponent } from './observables/debounce/debounce.component';
import { SubjectComponent } from './observables/subject/subject.component';

const routes: Routes = [
  {path: 'promise', component: PromiseComponent},
  {path: 'observable', component: ObservablesComponent, children:[
    {path: '', component: AllComponent},
    {path: 'from', component: FromComponent},
    {path: 'interval', component: IntervalComponent},
    {path: 'of', component:OfComponent},
    {path: 'from-ope', component: FromOperatorComponent},
    {path: 'custom', component: CustomObervableComponent},
    {path: 'map', component: MapOperatorComponent},
    {path: 'pluck', component: PluckComponent},
    {path: 'filter', component: FilterComponent},
    {path: 'tap', component: TapComponent},
    {path: 'take', component: TakeComponent},
    {path: 'retry', component: RetryComponent},
    {path: 'debounce', component: DebounceComponent},
    {path: 'subject', component: SubjectComponent},
    

  ]},
  {path: '**', redirectTo: 'promise'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
