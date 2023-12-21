import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AthleteRequest } from 'src/app/models/AthleteRequest';

@Injectable({
  providedIn: 'root'
})
export class AthleteService {

  constructor(private http: HttpClient) { }

  getAthletes() {
    return this.http.get("/server/athletes");
  }

  createAthlete(athlete: AthleteRequest) {
    let body = JSON.stringify(athlete);
    return this.http.post('/server/athletes', body);
  }

  getAthlete(athleteId: Number) {
    return this.http.get('/server/athletes/' + athleteId);
  }

  updateAthlete(athleteId: Number, athlete: AthleteRequest) {
    let body = JSON.stringify(athlete);
    return this.http.put('/server/athletes/' + athleteId, body);
  }
}
