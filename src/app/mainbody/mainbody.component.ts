import { Component, OnInit } from '@angular/core';
import { ChatboxsService, Message } from 'service/chatboxs.service';

@Component({
  selector: 'app-mainbody',
  templateUrl: './mainbody.component.html',
  styleUrls: ['./mainbody.component.css']
})
export class MainbodyComponent implements OnInit{

  messages : Message[]=[];
  value :string|undefined;

  constructor(public chatbox:ChatboxsService){}

  ngOnInit(): void {
    this.chatbox.conversation.subscribe((val)=>{
      this.messages = this.messages.concat(val);
    })
  }

  sendmessage(){
    this.chatbox.getbotanswer(this.value);
    this.value = '';
  }

}
