import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {MenuComponent} from "./components/menu/menu.component";
import {FooterComponent} from "./components/footer/footer.component";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, MenuComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'todo';
}
