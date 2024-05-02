import {Component, inject, OnInit} from '@angular/core';
import {HardcodedAuthService} from "../../services/hardcoded-auth.service";

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit {
  hardCodedAuthService = inject(HardcodedAuthService);
  ngOnInit() {
    this.hardCodedAuthService.logout();
  }

}
