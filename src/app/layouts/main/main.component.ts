import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {AppService} from "../../app.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  title = 'AngularLib';

  constructor(private readonly translate: TranslateService, private readonly appService: AppService) {
    translate.setDefaultLang('pl')
    translate.use('pl')
  }

  ngOnInit(): void {
  }

  click(): void {
    this.appService.getCustomer().subscribe({
      next: (res) => res.forEach((x) => console.log(x.firstName))
    })
  }


}
