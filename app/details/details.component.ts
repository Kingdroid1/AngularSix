import { Component, OnInit } from '@angular/core';
// import ApiService for use here
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  user$: object;

  constructor(private route: ActivatedRoute, private api: ApiService) {
    this.route.params.subscribe( params => this.user$ = params.id);
  }

  ngOnInit() {
    this.api.getUser(this.user$).subscribe(
      api => this.user$ = api
    );
  }

}
