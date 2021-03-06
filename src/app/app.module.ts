import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';


import { ShoppingService } from './shopping-list/shopping-service.service';
import {RecipeDataService} from './recipes/recipe-data.service';
import { AuthInterceptorService } from './auth/auth-interceptor.service';

import { ShoppingListRoutingModule } from './shopping-list/shopping-list-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    // HttpModule,
    AppRoutingModule,
    HttpClientModule,

    ShoppingListModule,
    SharedModule,
    AuthModule,
    ShoppingListRoutingModule
  
  ],
  providers: [ShoppingService , RecipeDataService , 
    {
      provide : HTTP_INTERCEPTORS, 
      useClass : AuthInterceptorService, 
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
