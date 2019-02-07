import { Component, OnInit } from '@angular/core';
// import ApiService for use here
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {

  users$: object;

  constructor(private api: ApiService) { } // create an instance of it here

  ngOnInit() {
    this.api.getUsers().subscribe(
      api => this.users$ = api
    );
  }

}
