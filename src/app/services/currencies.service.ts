import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {delay, Observable, retry, tap} from 'rxjs'


export interface IdataFromServerPB {
   cc: string;
   base_ccy: string;
   rate: string | number;
   success: string;
}

export interface IobjCurrencies {
   [key: string]: number
}

@Injectable({
   providedIn: 'root'
})


export class CurrenciesService {

   objCurrencies: IobjCurrencies = {}
   isLoading = true

   constructor(private http: HttpClient) {
   }

   getCurrenciesPB(): Observable<IdataFromServerPB[]> {
      return this.http.get<IdataFromServerPB[]>(
         'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
         .pipe(
            delay(2000),
            retry(1),
            tap(currencies => {
                  for (let i = 0; i < currencies.length; i++) {
                     let item: IdataFromServerPB = currencies[i]
                     if (item.cc == 'EUR' || item.cc == 'USD') {
                        this.objCurrencies[item.cc] = +item.rate
                     }
                  }
                  this.objCurrencies['UAH'] = 1
                  this.isLoading = false
               }
            )
         )
   }

}

//https://rxjs.dev/api
