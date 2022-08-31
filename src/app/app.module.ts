import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { TodoModule } from './todos/todo.module';
import { AppComponent } from './app/app.component';
import { environment } from '../environments/environment';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { appReducers } from './todos/store/app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    TodoModule,
    StoreModule.forRoot( appReducers ),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
