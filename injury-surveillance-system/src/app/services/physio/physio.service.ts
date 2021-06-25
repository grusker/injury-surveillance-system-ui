import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PhysioRequest } from 'src/app/models/PhysioRequest';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PhysioService {

  constructor(private http: HttpClient) { }

  getPhysios() {
    return this.http.get('http://localhost:8080/physios');
  }

  createPhysio(physio: PhysioRequest) {
    let body = JSON.stringify(physio);
    return this.http.post('http://localhost:8080/physios', body);
  }
}
