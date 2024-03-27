import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { BudgetComponent } from './pages/budget/budget.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { GoalComponent } from './pages/goal/goal.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CreateUserComponent },
  { path: 'budget', component: BudgetComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'goal', component: GoalComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
 exports: [RouterModule],
})
export class AppRoutingModule { }