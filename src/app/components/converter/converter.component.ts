//
import {AfterContentChecked, Component, OnInit} from '@angular/core'
import {CurrenciesService} from '../../services/currencies.service'
import {FormGroup, FormControl} from '@angular/forms'


@Component({
   selector: 'app-converter',
   templateUrl: './converter.component.html',
   styleUrls: ['./converter.component.css']
})

export class ConverterComponent implements OnInit, AfterContentChecked {

   isAlreadyChanged = false
   allCurrenciesArr: string[] = []
   rateUSD = 1
   rateEUR = 1

   formGroupConv = new FormGroup({
      firstNumber: new FormControl('100'),
      firstSelect: new FormControl('USD'),
      secondNumber: new FormControl('1'),
      secondSelect: new FormControl('UAH')
   })

   constructor(public currService: CurrenciesService) {
   }

   ngOnInit(): void {
      this.formGroupConv.disable()
   }

   ngAfterContentChecked() {
      if (this.currService.isLoading) {
      } else {
         if (!this.isAlreadyChanged) {
            this.allCurrenciesArr = Object.keys(this.currService.objCurrencies)
            this.rateUSD = this.currService.objCurrencies['USD']
            this.rateEUR = this.currService.objCurrencies['EUR']
            this.onChange('firstFieldChange')
            this.formGroupConv.enable()
            this.isAlreadyChanged = true
         }
      }
   }


   onChange(flag: string) {
      const firstNumber = this.formGroupConv.value.firstNumber
      const secondNumber = this.formGroupConv.value.secondNumber
      const firstSelect = this.formGroupConv.value.firstSelect
      const secondSelect = this.formGroupConv.value.secondSelect

      if (!firstSelect || !secondSelect || !firstNumber || !secondNumber) {
         console.log('no currency value')
         return
      }

      if (flag === 'firstFieldChange') {
         const secondNumberRes = (+firstNumber *
            (this.currService.objCurrencies[firstSelect]
               / this.currService.objCurrencies[secondSelect]))
            .toFixed(2)
         this.formGroupConv.patchValue({
            secondNumber: secondNumberRes
         })

      } else if (flag === 'secondFieldChange') {
         const firstNumberRes = (+secondNumber *
            (this.currService.objCurrencies[secondSelect] /
               this.currService.objCurrencies[firstSelect]))
            .toFixed(2)
         this.formGroupConv.patchValue({
            firstNumber: firstNumberRes
         })
      }
   }
}

//this.allCurrenciesArr = ['UAH', 'USD', 'EUR']
