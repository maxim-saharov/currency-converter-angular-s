import {Component, OnInit} from '@angular/core'
import {CurrenciesService} from './services/currencies.service'

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

   errorMessage: string = ''
   dateOfReceive: Date = new Date()

   constructor(public currService: CurrenciesService) {
   }

   ngOnInit(): void {
      this.currService.getCurrenciesPB().subscribe(
         {
            error: (error) => {
               this.errorMessage = 'Some error: ' + error.message
               console.error(this.errorMessage)
            },
            complete: () => {
               if (this.errorMessage) {
                  this.errorMessage = ''
               }
               this.dateOfReceive = new Date()
            }
         }
      )
   }
}
