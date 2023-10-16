import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import {TooltipPosition, MatTooltipModule} from '@angular/material/tooltip';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat/chat.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChatService } from './services/chat.service';
import { SignUpComponent } from './sign-up/sign-up.component';


const routes:Routes = [
  {path:'',pathMatch: 'full',redirectTo:'home'},
  {path:'home',component:HomeComponent},
  {path:'chat',component:ChatComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ChatComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatTooltipModule,
    FormsModule
  ],
  exports:[RouterModule],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
