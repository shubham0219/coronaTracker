import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  wolrdStatURL = 'https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php';
  CountryWiseStatURL = 'https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php';

  constructor(private http: HttpClient) { }

  getGlobalStats() {
    const headers = {
      headers: new HttpHeaders({
        'x-rapidapi-host': 'coronavirus-monitor.p.rapidapi.com',
        'x-rapidapi-key': '49251608a4msh0ee9f3db2bc5bf4p1ad75ejsn318a3a643c91'
      })
    };

    return this.http.get(this.wolrdStatURL, headers);
  }

  getCountryStats() {
    const headers = {
      headers: new HttpHeaders({
        'x-rapidapi-host': 'coronavirus-monitor.p.rapidapi.com',
        'x-rapidapi-key': '49251608a4msh0ee9f3db2bc5bf4p1ad75ejsn318a3a643c91'
      })
    };

    return this.http.get(this.CountryWiseStatURL, headers);
  }

}
