import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    public url: string;
    public active: boolean = true;
    /**
     *
     */
    constructor(@Inject('BASE_URL') baseUrl: string) {
        this.url = baseUrl;
    }
}
