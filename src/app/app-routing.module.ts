import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { CapabilityContentComponent } from './capability-content/capability-content.component';

const routes: Routes = [
  { path: 'capability1', component: CapabilityContentComponent, data: { element: 'capability1-app', url: 'http://localhost:4201/elements-es2015.js' } },
  { path: 'capability2', component: CapabilityContentComponent, data: { element: 'capability2-app', url: 'http://localhost:4202/elements-es2015.js' } },
  { path: '**', component: EmptyRouteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  exports: [RouterModule]
})
export class AppRoutingModule { }
