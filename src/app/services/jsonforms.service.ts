import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JsonFormsService {
  constructor(private http: HttpClient) {}

  getFormSchema(url: string): Observable<any> {
    return this.http.get(url);
  }
}