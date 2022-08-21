import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'customer',
        loadChildren: () => import('./customer/customer.module').then(module => module.CustomerModule)
      },
      {
        path: 'ngrx',
        loadChildren: () => import('./movies/movies.module').then(module => module.MoviesModule)
      },
      {
        path: '',
        loadChildren: () => import('../auth/auth-routing.module').then(module => module.AuthRoutingModule)
      }
    ])
  ]
})
export class EntityModule {
}
