import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { AppComponent } from './app.component';
import { FibonacciComponent } from './fibonacci.component';
import { ProductComponent } from './product/product.component';
import { FibonacciService } from './fibonacci.service';
import { HomeComponent } from './home.component';
import { RoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { CalculateComponent } from './calculate/calculate.component';
import { HistoryComponent } from './calculate/history/history.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { AuthService } from './auth/auth.service';
import { CalculateService } from './calculate/calculate.service';
import { NewCaluclationComponent } from './calculate/new-caluclation/new-caluclation.component';
import { environment } from '../environments/environment';




@NgModule({
  declarations: [
    AppComponent,
    FibonacciComponent,
    ProductComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    CalculateComponent,
    HistoryComponent,
    WelcomeComponent,
    HeaderComponent,
    SidenavListComponent,
    NewCaluclationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule

  ],
  providers: [FibonacciService, AuthService, CalculateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
