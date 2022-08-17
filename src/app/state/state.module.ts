import { NgModule }                  from '@angular/core';

import { StoreModule }               from '@ngrx/store';

import { UserFacade, userReducer } from './users';
import { postReducer, PostsFacade } from './posts';

import { AngularFireDatabaseModule } from "@angular/fire/compat/database";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireModule } from "@angular/fire/compat";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
export const firebaseConfig =' environment.firebaseConfig';

@NgModule({
  imports: [
    // AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,

    EffectsModule.forRoot([
      UserFacade,
      PostsFacade
    ]),

    // Signature matches AppState interface
    StoreModule.forRoot({
    }),

    StoreDevtoolsModule.instrument({ maxAge: 25 })
  ],
  providers: [
      UserFacade,
      PostsFacade
  ],
})
export class AppStateModule { }
