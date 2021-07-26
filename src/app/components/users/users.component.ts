import {Component} from '@angular/core';
import {UsersService} from "../../servises";
import {IUser} from "../../models";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  users: IUser[];

  constructor(private usersService: UsersService) {
    this.usersService.getUsers().subscribe(value => {
      this.users = value;
      console.log(this.users)
    })
  }

}
