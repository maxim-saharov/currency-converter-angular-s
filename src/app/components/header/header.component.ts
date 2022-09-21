//
import {Component, Input} from '@angular/core'
import {CurrenciesService} from '../../services/currencies.service'


@Component({
   selector: 'app-header',
   templateUrl: './header.component.html',
   styleUrls: ['./header.component.css']
})


export class HeaderComponent {

   @Input() errorMessage: string = ''
   @Input() dateOfReceive: Date = new Date()

   constructor(public currService: CurrenciesService) {
   }

}


