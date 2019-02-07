import { Component, OnInit } from '@angular/core';
// import ApiService for use here
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts$: object;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getPosts().subscribe(
      api => this.posts$ = api
    );
  }

}
