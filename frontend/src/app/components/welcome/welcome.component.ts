import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {WelcomeDataService} from "../../services/data/welcome-data.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [
    RouterLink,
    NgIf
  ],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit {
  name = ''
  welcomeMessage: string | undefined;


  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService
  ) {
  }

  ngOnInit() {
    this.name = this.route.snapshot.params['name']
  }

  getWelcomeMessage() {
    console.log(this.service.executeHelloWorldBeanService())
    this.service.executeHelloWorldBeanService().subscribe(
      {
        next: response => this.handleSuccessfulResponse(response.message),
        error: error => this.handleErrorResponse(error)
      });
  }

  getWelcomeMessageWithParameter() {
    this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response.message),
      error => this.handleErrorResponse(error)
    );
  }

  handleSuccessfulResponse(response: string) {
    this.welcomeMessage = response;
  }

  private handleErrorResponse(error: any) {
    this.welcomeMessage = error.error.message;
  }
}
