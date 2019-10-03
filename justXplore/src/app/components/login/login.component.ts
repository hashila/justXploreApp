import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name: string;
  islogin = false;
  password: string;
  validity = true;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  submitFunction() {
    if (this.name === 'admin' && this.password === 'admin') {
      this.router.navigate(['posts']);
      this.validity = true;
      this.islogin = true;
      // this.apiservice.getPostDetails(2).subscribe((data: any) => {
      //   console.log(data);
      // });
      // console.log(this.apiservice.getPostDetails(1));
    } else {
      this.name = '';
      this.password = '';
      this.validity = false;
    }
  }
}
