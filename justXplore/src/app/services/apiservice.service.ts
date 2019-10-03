import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  url = `http://jsonplaceholder.typicode.com/`;
  constructor(private http: HttpClient) { }

  getPosts(): any {
    return this.http.get(this.url + 'posts');
  }
  getPostDetails(postID: number) {
    const allposts = this.http.get(this.url + `comments?postId=${postID}`);
    return allposts;
  }
}
