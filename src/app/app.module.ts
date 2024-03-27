import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ContainerComponent } from './components/container/container.component';
import { HomeComponent } from './pages/home/home.component'; 
import { GoalComponent } from './pages/goal/goal.component';
import { MatCardModule } from '@angular/material/card';
import { LoginComponent } from './pages/login/login.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ModalSimplesComponent } from './components/modal-simples/modal-simples.component';   
import { MatFormFieldModule } from '@angular/material/form-field'; 
import {FormsModule} from '@angular/forms';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { HttpClientModule } from  '@angular/common/http';
import { BudgetComponent } from './pages/budget/budget.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { ProfileComponent } from './pages/profile/profile.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CardSimplesComponent } from './components/card-simples/card-simples.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    AppComponent,
    ContainerComponent,
    HomeComponent,
    LoginComponent,
    CreateUserComponent,
    BudgetComponent,
    ProfileComponent,
    GoalComponent,
    ModalSimplesComponent,
    CardSimplesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,    
    MatFormFieldModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
