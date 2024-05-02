import {Component, inject, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {HardcodedAuthService} from "../../services/hardcoded-auth.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    RouterLink,
    NgIf
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{
  hardCodedAuthService = inject(HardcodedAuthService);
  isUserLoggedIn = false;
  username = '';

  constructor() {
  }

  ngOnInit() {
    // get username as the last part of the URL after the last /
    this.username = 'TestUser';
    // Not used
    this.isUserLoggedIn = this.hardCodedAuthService.isUserLoggedIn();
  }
}
