import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {AppComponent} from './app.component'
import {HttpClientModule} from '@angular/common/http'
import {HeaderComponent} from './components/header/header.component'
import {ConverterComponent} from './components/converter/converter.component'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

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
