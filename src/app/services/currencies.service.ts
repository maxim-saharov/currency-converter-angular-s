import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {delay, retry, tap} from 'rxjs'


export interface IdataFromServerPB {
   ccy: string;
   base_ccy: string;
   buy: string | number;
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

   constructor(private http: HttpClient) {
   }

   getCurrenciesPB() {
      return this.http.get<IdataFromServerPB[]>(
         'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
         .pipe(
            delay(2000),
            retry(1),
            tap(currencies => {
                  for (let i = 0; i < currencies.length; i++) {
                     let item: IdataFromServerPB = currencies[i]
                     if (item.ccy !== 'BTC') {
                        this.objCurrencies[item.ccy] = +item.buy
                     }
                  }
                  this.objCurrencies['UAH'] = 1
               }
            )
         )
   }

}

//https://rxjs.dev/api
