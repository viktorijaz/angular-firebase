import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CalculateComponent } from './calculate/calculate.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthGuard } from './auth/auth.guard';
import { HistoryComponent } from './calculate/history/history.component';

const routes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'calculate', component: CalculateComponent, canActivate: [AuthGuard] },
    { path: 'history', component: HistoryComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    providers: [AuthGuard],
    exports: [RouterModule]
})
export class RoutingModule { }
