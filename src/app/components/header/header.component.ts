//
import {Component, Input} from '@angular/core'
import {IobjCurrencies} from '../../services/currencies.service'

@Component({
   selector: 'app-header',
   templateUrl: './header.component.html',
   styleUrls: ['./header.component.css']
})


export class HeaderComponent {

   @Input() objCurrencies2: IobjCurrencies = {}
   @Input() isLoading = true
   @Input() errorMessage: string = ''
   @Input() dateOfReceive: Date = new Date()

}


