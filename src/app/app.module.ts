import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { MatTooltipModule} from '@angular/material/tooltip';
import { FormsModule } from '@angular/forms';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat/chat.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChatService } from './services/chat.service';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductComponent } from './product/product.component';


const routes:Routes = [
  {path:'',pathMatch: 'full',redirectTo:'home'},
  {path:'home',component:HomeComponent},
  {path:'home/about-us',component:AboutUsComponent},
  {path:'chat',component:ChatComponent},
  {path:'sign-up',component:SignUpComponent},
  {path: 'log-in',component:LogInComponent},
  {path:'products',component:ProductComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ChatComponent,
    SignUpComponent,
    LogInComponent,
    AboutUsComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatTooltipModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule
  ],
  exports:[RouterModule],
  providers: [ChatService,
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
