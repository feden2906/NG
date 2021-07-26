import { Component } from '@angular/core';
import {IPost} from "../../models";
import {PostsService} from "../../servises";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {

  posts: IPost[];

  constructor(private postsService: PostsService) {
    this.postsService.getPosts().subscribe(value => {
      this.posts = value;
      console.log(this.posts)
    })
  }

}
