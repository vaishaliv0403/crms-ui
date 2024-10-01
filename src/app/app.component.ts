import { Component } from '@angular/core';
import { RouterOutlet, NavigationEnd, Router } from '@angular/router';
import { HomeComponent } from "./page/home/home.component";
import { HeaderComponent } from './components/header/header.component';
import { QuesComponent } from './page/ques/ques.component';
import { CommentBoxComponent } from './components/comment-box/comment-box.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent,HeaderComponent,QuesComponent,CommentBoxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'crms-ui';
  isHomePage: boolean = false;
  
  // constructor(private router: Router) {
   
  //   this.router.events.subscribe((event) => {
  //     if (event instanceof NavigationEnd) {
  //       // this.isHomePage = (event.urlAfterRedirects === '/');
  //       // if (event.url == '/summary') this.isHomePage = true;
  //       // else this.isHomePage = false;
  //       this.isHomePage = event.url === '/home';
  //     }
  //   });
  // }

  // ngOnInit() {
  
  //   this.router.navigate(['homw']);
  //   // this.isHomePage = (this.router.url === '/');
  // }
}
