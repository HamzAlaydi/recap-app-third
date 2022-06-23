import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-posts-titls',
  templateUrl: './posts-titls.component.html',
  styleUrls: ['./posts-titls.component.css'],
})
export class PostsTitlsComponent implements OnInit {
  public postsTitle: string[] = [];
  public errors: string = '';
  constructor(
    private _postsService: PostsService,
    private router: Router,
    private _pathSource: PostsService
  ) {}

  ngOnInit(): void {
    this._postsService.getData().subscribe(
      (data) => (this.postsTitle = data.map((d) => d.title)),
      (error) => (this.errors = error.message)
    );
  }
  public handleClick(index: number) {
    this.router.navigate(['posts-details', ++index]);
    console.log(index);

    this._pathSource.passPath(index);
  }
}
