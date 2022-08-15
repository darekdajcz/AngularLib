import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FaIconLibrary } from "@fortawesome/angular-fontawesome";
import { fontAwesomeIco } from "./font-awesome-icons/font-awesome-icons";
import locales from '@angular/common/locales/pl'


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    {
      provide: LOCALE_ID,
      useValue: 'pl'
    }
  ]
})
export class CoreModule {
  constructor(fontAwesomeLib: FaIconLibrary) {
    registerLocaleData(locales)
    fontAwesomeLib.addIcons(...fontAwesomeIco)
  }
}
