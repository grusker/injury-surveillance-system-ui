import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PhysioRequest } from 'src/app/models/PhysioRequest';

@Injectable({
  providedIn: 'root'
})
export class PhysioService {

  constructor(private http: HttpClient) { }

  getPhysios() {
    return this.http.get('/server/physios');
  }

  createPhysio(physio: PhysioRequest) {
    let body = JSON.stringify(physio);
    return this.http.post('/server/physios', body);
  }
}
