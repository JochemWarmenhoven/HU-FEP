import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { AuthService } from './shared/auth.service';
import { RouterModule, Routes } from '@angular/router';
import { ProductPageComponent } from './product-page/product-page.component';
import { MenuComponent } from './shared/menu/menu.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginguardService } from './shared/loginguard.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyReservationsComponent } from './my-reservations/my-reservations.component';
import { ProcessingPageComponent } from './processing-page/processing-page.component';
import { LoanProductPageComponent } from './loan-product-page/loan-product-page.component';
import { ProductIntakePageComponent } from './product-intake-page/product-intake-page.component';
import { RoleguardService } from './shared/roleguard.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'toastr-ng2';

const appRoutes: Routes = [
  { path: '', component: AppComponent, canActivate: [LoginguardService] },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [LoginguardService]
  },
  { path: 'login', component: LoginPageComponent },
  {
    path: 'products',
    component: ProductPageComponent,
    canActivate: [LoginguardService]
  },
  {
    path: 'my-reservations',
    component: MyReservationsComponent,
    canActivate: [LoginguardService]
  },
  {
    path: 'processing',
    component: ProcessingPageComponent,
    canActivate: [RoleguardService]
  },
  {
    path: 'loan-products',
    component: LoanProductPageComponent,
    canActivate: [RoleguardService]
  },
  {
    path: 'intake',
    component: ProductIntakePageComponent,
    canActivate: [RoleguardService]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    MenuComponent,
    LoginPageComponent,
    DashboardComponent,
    MyReservationsComponent,
    ProcessingPageComponent,
    LoanProductPageComponent,
    ProductIntakePageComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [AuthService, LoginguardService, RoleguardService],
  bootstrap: [AppComponent]
})
export class AppModule {}
