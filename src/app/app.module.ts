import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BodyComponent } from './pages/body/body.component';
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { UsersComponent } from './pages/users/users.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { DiscountsComponent } from './pages/discounts/discounts.component';
import { AlertComponent } from './pages/alert/alert.component';
import { HeaderComponent } from './components/header/header.component';
import { MatCardModule } from '@angular/material/card';
import { DatePipe } from '@angular/common';
import { CardOneComponent } from './pages/dashboard/card-one/card-one.component';
import { CardTwoComponent } from './pages/dashboard/card-two/card-two.component';
import { CardThreeComponent } from './pages/dashboard/card-three/card-three.component';
import { CardFourComponent } from './pages/dashboard/card-four/card-four.component';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';
import { NgChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { InvoiceReceiptComponent } from './pages/dashboard/card-three/invoice-receipt/invoice-receipt.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    DashboardComponent,
    PageNotFoundComponent,
    BodyComponent,
    AnalyticsComponent,
    UsersComponent,
    OrdersComponent,
    DiscountsComponent,
    AlertComponent,
    HeaderComponent,
    CardOneComponent,
    CardTwoComponent,
    CardThreeComponent,
    CardFourComponent,
    ComingSoonComponent,
    InvoiceReceiptComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatCardModule,
    MatDialogModule,
    HttpClientModule,
    MatTableModule,
    NgChartsModule,
    MatProgressBarModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
