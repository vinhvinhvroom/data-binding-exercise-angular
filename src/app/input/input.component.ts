import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  userName="";
  userNameCreationStatus = "No Username was created!"
  allowClick=false

  constructor() { }

  ngOnInit(): void {
  }

  onCreateUserName(){
    this.userNameCreationStatus = this.userName
  }

  onUpdateUserName(event: Event) {
    this.userName = (<HTMLInputElement>event.target).value;
    this.allowClick=true
  }

  onHandleClick() {
    this.userNameCreationStatus = "User Name Created! Name is " + this.userName;
    this.userName = "";
    this.allowClick=false;
  }

}
