import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgChartsModule } from 'ng2-charts';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { Pregunta1ScreenComponent } from './screens/pregunta1-screen/pregunta1-screen.component';
import { Pregunta2ScreenComponent } from './screens/pregunta2-screen/pregunta2-screen.component';

import {MatRadioModule} from '@angular/material/radio';
import { FooterComponent } from './partials/footer/footer.component';
import { NavbarComponent } from './partials/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    Pregunta1ScreenComponent,
    Pregunta2ScreenComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgChartsModule,
    FormsModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
