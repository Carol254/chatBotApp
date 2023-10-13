import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  constructor(private router:Router){

  }


  backToHome(){
    this.router.navigate(['/home']);
  }
}
