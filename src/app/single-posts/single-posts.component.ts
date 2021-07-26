import {Component, Input, OnInit} from '@angular/core';
import {IPost} from "../models/IPost";

@Component({
  selector: 'app-single-posts',
  templateUrl: './single-posts.component.html',
  styleUrls: ['./single-posts.component.scss']
})
export class SinglePostsComponent implements OnInit {

  @Input()
  post:IPost

  constructor() { }

  ngOnInit(): void {
  }

}
