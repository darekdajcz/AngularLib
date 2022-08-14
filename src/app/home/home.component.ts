import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {AppService} from "../app.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'AngularLib';

  constructor(private readonly translate: TranslateService, private readonly appService: AppService) {


  }

  ngOnInit(): void {
  }

  click(): void {
    this.appService.getCustomer().subscribe({
      next: (res) => res.forEach((x) => console.log(x.firstName))
    })
  }

}