import { NgModule }              from '@angular/core';
import { RouterModule, Routes, PreloadAllModules }  from '@angular/router';

import { AuthComponent } from './auth/auth.component'



const appRoutes: Routes = [
  { 
    path: '',
    redirectTo: '/recipes', pathMatch: 'full' 
  },
  {
    path: 'recipes',
    loadChildren: ()=> import('./recipes/recipes.module').then(m=>m.RecipesModule),
  },
  {
    path: 'auth', component: AuthComponent
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
      ,
       { enableTracing: true, preloadingStrategy: PreloadAllModules}
      ,
       // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

