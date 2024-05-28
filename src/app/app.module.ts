import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SharedModule } from './modules/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { AuthInterceptor } from './services/interceptor.service';
import { AuthModule } from './modules/auth/auth.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule,
    MatIconModule,
    AuthModule,
    RouterModule,
    
  ],
  providers: [ 
      {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true,
      },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
