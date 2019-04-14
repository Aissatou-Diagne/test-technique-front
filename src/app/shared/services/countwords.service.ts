import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CountwordsService {

  constructor(private http: HttpClient) { }

  public countWord(texteArea: string): Observable<object> {
    const url = 'http://127.0.0.1:8000/api/countwords/' + texteArea;
    return this.http.get(url)


  };


  // countWord(texteArea: string): Observable<object> {

  //   const url = 'http://127.0.0.1:8000/api/countwords/' + texteArea;
  //   return this.http.get(url);

  // }

}



