import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookie-banner',
  templateUrl: './cookie-banner.component.html',
  styleUrls: ['./cookie-banner.component.scss'],
})
export class CookieBannerComponent implements OnInit {
  isAccepted: boolean = false;

  constructor() {}

  ngOnInit(): void {
    const storedValue = localStorage.getItem('cookieAccepted');
    if (storedValue === 'true') {
      this.isAccepted = true;
    }
  }

  acceptCookies(): void {
    this.isAccepted = true;
    localStorage.setItem('cookieAccepted', 'true');
  }
}