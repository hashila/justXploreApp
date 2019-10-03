import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from 'src/app/services/apiservice.service';

@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.css']
})
export class PostdetailsComponent implements OnInit {
  id: number;
  postprevious: any;
  details: any;
  constructor(private route: ActivatedRoute, private apiservice: ApiserviceService ) { }

  ngOnInit() {
    this.route.params.subscribe((par) => {
      this.id = par.id;
      this.postprevious = par;
    });
    // console.log(this.id);
    this.apiservice.getPostDetails(this.id).subscribe(
      (detail) => {
        this.details = detail;
      }
    )
  }

}
