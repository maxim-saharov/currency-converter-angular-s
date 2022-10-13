import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {HttpClientModule} from '@angular/common/http'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import {AppComponent} from './app.component'
import {HeaderComponent} from './components/header/header.component'
import {ConverterComponent} from './components/converter/converter.component'

@NgModule({

   declarations: [
      AppComponent,
      HeaderComponent,
      ConverterComponent

   ],

   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule
   ],

   providers: [],
   bootstrap: [AppComponent]
})

export class AppModule {
}

// import {APP_BASE_HREF} from '@angular/common';
//{provide: APP_BASE_HREF, useValue: '/app'}
// as above in the documentation it writes for publishing a site - but it doesn't work like that
// and baseHref and deployUrl was not in angular.json
// https://stackoverflow.com/questions/68453909/remove-warning-option-basehref-is-depracated-use-basehref-option-in-the-browse
