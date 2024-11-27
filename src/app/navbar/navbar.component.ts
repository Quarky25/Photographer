import {Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit{
  isLoading: boolean = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }
  toggleSubmenu(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    const submenu = (event.target as HTMLElement).nextElementSibling as HTMLElement;
    submenu.classList.toggle('show');
  }
}

