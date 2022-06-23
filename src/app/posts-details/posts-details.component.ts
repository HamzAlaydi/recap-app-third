import { Component, OnInit } from '@angular/core';
import { IPosts } from '../posts';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts-details',
  templateUrl: './posts-details.component.html',
  styleUrls: ['./posts-details.component.css'],
})
export class PostsDetailsComponent implements OnInit {
  constructor(private _postsService: PostsService) {}

  public details!: IPosts;

  public error: String | undefined;

  ngOnInit(): void {
    this._postsService.getElementData().subscribe(
      (data) => {
        this.details = data;
      },
      (error) => (this.error = error.message)
    );
  }
}
