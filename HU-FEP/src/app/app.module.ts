import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { AuthService } from './shared/auth.service';
import { RouterModule, Routes} from '@angular/router';
import { ProductPageComponent } from './product-page/product-page.component';
import { MenuComponent } from './shared/menu/menu.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {LoginguardService} from './shared/loginguard.service';
import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes: Routes = [
  { path: '', component: AppComponent, canActivate: [LoginguardService]},
  { path: 'dashboard', component: DashboardComponent, canActivate: [LoginguardService]},
  { path: 'login', component: LoginPageComponent},
  { path: 'products', component: ProductPageComponent, canActivate: [LoginguardService]}
];

@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    MenuComponent,
    LoginPageComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService, LoginguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
