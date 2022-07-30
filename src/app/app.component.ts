import {Component} from "@angular/core";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-main',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AngularLib';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('pl')
    translate.use('pl')
  }
}
