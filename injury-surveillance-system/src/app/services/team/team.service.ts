import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TeamRequest } from 'src/app/models/TeamRequest';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }

  getTeams() {
    return this.http.get('/server/teams');
  }

  createTeam(team: TeamRequest) {
    const body = JSON.stringify(team);
    return this.http.post('/server/teams', body);
  }

  getTeam(teamId: Number) {
    return this.http.get('/server/teams/' + teamId);
  }

  updateTeam(teamId: Number, team: TeamRequest) {
    const body = JSON.stringify(team);
    return this.http.put('/server/teams/' + teamId, body);
  }
}
