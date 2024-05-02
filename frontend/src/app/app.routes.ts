import {Routes} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {ErrorComponent} from "./components/error/error.component";
import {WelcomeComponent} from "./components/welcome/welcome.component";
import {ListTodosComponent} from "./components/list-todos/list-todos.component";
import {LogoutComponent} from "./components/logout/logout.component";
import {RouteGaurdService} from "./services/route-gaurd.service";
import {TodoComponent} from "./components/todo/todo.component";

export const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'welcome/:name', component: WelcomeComponent, canActivate: [RouteGaurdService]},
  {path: 'todos', component: ListTodosComponent, canActivate: [RouteGaurdService]},
  {path: 'todos/:id', component: TodoComponent, canActivate: [RouteGaurdService]},
  {path: 'logout', component: LogoutComponent},
  {path: '**', component: ErrorComponent}
];
