import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaIconLibrary } from "@fortawesome/angular-fontawesome";
import { fontAwesomeIco } from "./font-awesome-icons/font-awesome-icons";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CoreModule {
  constructor(fontAwesomeLib: FaIconLibrary) {
    fontAwesomeLib.addIcons(...fontAwesomeIco)
  }
}
