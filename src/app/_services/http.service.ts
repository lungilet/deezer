import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  getHttp(endPointUrl: any) {
    const api = this.apiUrl + endPointUrl;
    return this.httpClient.get(api);
  }

}
