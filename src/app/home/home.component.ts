import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {AppService} from "../app.service";
import { NgxSpinnerService } from "ngx-spinner";
import { SPINNER_TIMEOUT } from "../shared/constants/timeout.constants";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'AngularLib';

  constructor(private readonly translate: TranslateService, private readonly appService: AppService,
              private readonly spinner: NgxSpinnerService) {
  }

  ngOnInit(): void {
    this.spinner.show().then(()=> setTimeout(() => this.spinner.hide(), SPINNER_TIMEOUT))
  }

  click(): void {
    this.appService.getCustomer().subscribe({
      next: (res) => res.forEach((x) => console.log(x.firstName))
    })
  }

}
