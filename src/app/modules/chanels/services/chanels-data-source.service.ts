import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChanelsResponse } from '../models/chanel.model';

@Injectable()
export class ChanelsDataSourceService {
  private _jsonURL = 'assets/channels.json';
  constructor(private http: HttpClient) { }

  get$(): Observable<ChanelsResponse> {
    return this.http.get<ChanelsResponse>(this._jsonURL);
  }
}
