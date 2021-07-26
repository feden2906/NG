import {Component, Input} from '@angular/core';
import {IUser} from "../../models";

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.scss']
})
export class SingleUserComponent {

  @Input()
  user:IUser

}
