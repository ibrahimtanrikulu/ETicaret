import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  constructor(private httpClient: HttpClient) {}

  get<T>(requestParameter: string, jsonName: string): Observable<T> {
    return this.httpClient.get<T>(requestParameter + jsonName);
  }

  post<T>(
    requestParameter: string,
    jsonName: string,
    body: Partial<T>
  ): Observable<T> {
    return this.httpClient.post<T>(requestParameter + jsonName, body);
  }

  put<T>(
    requestParameter: string,
    jsonName: string,
    body: Partial<T>
  ): Observable<T> {
    return this.httpClient.put<T>(requestParameter + jsonName, body);
  }

  delete<T>(
    requestParameter: string,
    jsonName: string,
    id: string
  ): Observable<T> {
    return this.httpClient.delete<T>(requestParameter + jsonName + '/' + id);
  }
}
