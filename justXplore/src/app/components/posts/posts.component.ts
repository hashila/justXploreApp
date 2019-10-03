import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  postList: any;
  constructor(private apiservice: ApiserviceService, private router: Router) { }

  ngOnInit() {
    this.apiservice.getPosts().subscribe((data: any) => {
      // this.postList.push(data);
      this.postList = data;
    });
  }
  clickPost(postId, post) {
    this.router.navigate(['/post-details', postId, post]);
    console.log(postId);
  }

}
