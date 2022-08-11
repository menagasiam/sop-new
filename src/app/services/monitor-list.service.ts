import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'



@Injectable({
  providedIn: 'root'
})
export class MonitorListService {

  constructor(private httpClient: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Authorization': 'Token 0aeb15de83ef6fb02695f2ce0d99374046f32eb9'
    })
  }

  getCompletedRecords(requestBody: any): Observable<any> {
    return this.httpClient.post<any>(environment.baseUrl + '/monitoring-list/',
      requestBody, this.httpHeader);
  }







}
