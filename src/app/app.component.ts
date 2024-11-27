import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isLoading = true;

  ngOnInit() {
    setTimeout(() => {
      this.fadeOutLoadingScreen();
    }, 3000);
  }

  fadeOutLoadingScreen() {
    const loadingScreen = document.querySelector(
      '.loading-screen'
    ) as HTMLElement;

    if (loadingScreen) {
      loadingScreen.classList.add('fade-out');
    }

    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }
}
