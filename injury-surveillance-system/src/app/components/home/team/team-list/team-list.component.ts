import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team/team.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css', '../../../../app.component.css']
})
export class TeamListComponent implements OnInit {
  public teams: any;
  public displayedColumns: any;

  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
    this.getTeams();
    this.displayedColumns = ['id', 'name'];
  }

  getTeams() {
    this.teamService.getTeams().subscribe((data: any) => {
      this.teams = data;
      console.log(data);
    });
  }
}
