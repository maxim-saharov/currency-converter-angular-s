//
import {Component, Input} from '@angular/core'
import {IobjCurrencies} from '../../services/currencies.service'

@Component({
   selector: 'app-converter',
   templateUrl: './converter.component.html',
   styleUrls: ['./converter.component.css']
})
export class ConverterComponent {

   @Input() objCurrencies3: IobjCurrencies = {}
   @Input() isLoading = true
   isFistChange = false

   firstAmount: any = 100
   secondAmount: any = 1
   firstSelected = 'USD'
   secondSelected = 'UAH'
   allCurrenciesArr: string[] = []

   rateUSD = 1
   rateEUR = 1

   ngDoCheck() {
      if (this.isLoading) {
      } else {
         if (!this.isFistChange) {
            this.allCurrenciesArr = Object.keys(this.objCurrencies3)
            this.rateUSD = this.objCurrencies3['USD']
            this.rateEUR = this.objCurrencies3['EUR']
            this.onChange('first-input')
            this.isFistChange = true
         }
      }
   }

   onChange(flag: string) {

      if (flag === 'first-input' || flag === 'first-select') {
         this.secondAmount = (
            (this.firstAmount * this.objCurrencies3[this.firstSelected]) /
            this.objCurrencies3[this.secondSelected]
         ).toFixed(2)
      } else if (flag === 'second-input' || flag === 'second-select') {
         this.firstAmount = (
            (this.secondAmount * this.objCurrencies3[this.secondSelected]) /
            this.objCurrencies3[this.firstSelected]
         ).toFixed(2)
      }
   }

}

//this.allCurrenciesArr = ['UAH', 'USD', 'EUR']

