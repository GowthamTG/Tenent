import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visitor',
  templateUrl: './visitor.component.html',
  styleUrls: ['./visitor.component.scss'],
})
export class VisitorComponent implements OnInit {
  showNav: boolean = true;
  constructor(private router: Router) {}
  ngOnInit(): void {
    if (['/login', '/register'].includes(this.router.url)) {
      this.showNav = false;
    }
  }
}
