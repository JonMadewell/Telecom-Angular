import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  lang: any;
  constructor() { }

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || 'en'
  }

  changeLang(lang: any){
    
    console.log(lang);
    localStorage.setItem('lang', lang);
    window.location.reload();
  }

}
