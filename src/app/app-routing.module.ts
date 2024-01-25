import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AlertComponent } from './pages/alert/alert.component';
import { DiscountsComponent } from './pages/discounts/discounts.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { UsersComponent } from './pages/users/users.component';
import { AnalyticsComponent } from './pages/analytics/analytics.component';

const routes: Routes = [
  { path: 'alert', component: AlertComponent, title: 'Geegpay - Alert' },
  { path: 'discounts', component: DiscountsComponent, title: 'Geegpay - Discount' },
  { path: 'orders', component: OrdersComponent, title: 'Geegpay - Orders' },
  { path: 'users', component: UsersComponent, title: 'Geegpay - Users' },
  { path: 'analytics', component: AnalyticsComponent, title: 'Geegpay - Analytics' },
  { path: 'dashboard', component: DashboardComponent, title: 'Geegpay - dashboard' },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
