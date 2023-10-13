import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Message,ChatService } from '../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent  implements OnInit{

  messages: Message[] = [];
  value!: string | '';

  constructor(private router:Router, private chatService:ChatService){

  }

ngOnInit(): void {
  this.chatService.conversation.subscribe((val) => {
    this.messages = this.messages.concat(val);
  });
}

sendMessage() {
  this.chatService.getBotAnswer(this.value);
  this.value = '';
}

  backToHome(){
    this.router.navigate(['/home']);
  }
}
