import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CalculateComponent } from './calculate/calculate.component';

import { FibonacciComponent } from './fibonacci.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'calculate', component: CalculateComponent, canActivate: [AuthGuard] },
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
    { path: 'products', component: FibonacciComponent, canActivate: [AuthGuard] }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    providers: [AuthGuard],
    exports: [RouterModule]
})
export class RoutingModule { }
