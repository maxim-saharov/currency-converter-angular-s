import {Component, OnInit} from '@angular/core'
import {CurrenciesService, IobjCurrencies} from './services/currencies.service'

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

   objCurrencies1: IobjCurrencies = {}
   isLoading = true
   errorMessage: string = ''
   subscription: any
   dateOfReceive: Date = new Date()

   constructor(public CurrenciesService: CurrenciesService) {
   }

   ngOnInit(): void {

      this.subscription = this.CurrenciesService.getCurrenciesPB().subscribe(
         {
            next: (value) => {
            },
            error: (error) => {
               this.errorMessage = '666 Some error: ' + error.message
               console.error(this.errorMessage)
            },
            complete: () => {
               this.objCurrencies1 = this.CurrenciesService.objCurrencies
               this.isLoading = false
               this.dateOfReceive = new Date()
               this.subscription.unsubscribe()
            }

         }
      )
   }
}

// currencies: any
// usd = 0
// eur = 0
