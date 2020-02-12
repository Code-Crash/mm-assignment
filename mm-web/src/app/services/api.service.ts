import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_BASE = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  /**
   * @description This function will execute the identical api and return the response
   * @param first - First array
   * @param second - Second Array
   */
  public identical(first: number[], second: number[]): Observable<any> {
    return this.http.post(`${this.API_BASE}/identical`, { first, second });
  }

  /**
   * @description This function will execute the sorted api and return the response
   */

  public sorted(array: number[]): Observable<any> {
    return this.http.post(`${this.API_BASE}/sorted`, { array });
  }

  /**
   * @description This function will execute the balance api and return the response
   */
  public balance(array: number[]): Observable<any> {
    return this.http.post(`${this.API_BASE}/balance`, { array });
  }

}
