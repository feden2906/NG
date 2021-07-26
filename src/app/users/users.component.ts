import {Component, OnInit} from '@angular/core';
import {UsersService} from "../servises/users.service";
import {IUser} from "../models/IUser";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: IUser[];

  constructor(private usersService: UsersService) {
    this.usersService.getUsers().subscribe(value => {
      this.users = value;
      console.log(this.users)
    })

  }

  ngOnInit(): void {
  }

}
