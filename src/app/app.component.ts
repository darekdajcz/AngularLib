import {Component} from "@angular/core";
import {TranslateService} from "@ngx-translate/core";
import {AppService} from "./app.service";

@Component({
  selector: 'app-main',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AngularLib';

  constructor(private readonly translate: TranslateService, private readonly appService: AppService) {
    translate.setDefaultLang('pl')
    translate.use('pl')
  }

  click(): void {
    console.log('res')
    this.appService.getCustomer().subscribe({
      next: res => console.log('res')
    })
  }


}
