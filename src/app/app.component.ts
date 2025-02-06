import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ChangelogComponent } from './changelog/changelog.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ChangelogComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ige511-web';
}