import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class NetworkserviceService {

  constructor(private http: HttpClient) { }

  getData(query): Observable<any> {
    return this.http.get("https://www.omdbapi.com/?apikey=81df2a82&s="+query)
  }
}
