import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.page.html',
  styleUrls: ['./loader.page.scss'],
})
export class LoaderPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['login'])
    setTimeout(() => 10000)
    console.log("Hello Loader page")
  }

}
