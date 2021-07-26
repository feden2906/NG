import {Component, Input} from '@angular/core';
import {IPost} from "../../models";

@Component({
  selector: 'app-single-posts',
  templateUrl: './single-posts.component.html',
  styleUrls: ['./single-posts.component.scss']
})
export class SinglePostsComponent {

  @Input()
  post:IPost

}
