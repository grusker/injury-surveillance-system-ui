import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TeamRequest } from 'src/app/models/TeamRequest';
import { TeamService } from 'src/app/services/team/team.service';

@Component({
  selector: 'app-team-create',
  templateUrl: './team-create.component.html',
  styleUrls: ['./team-create.component.css', '../../../../app.component.css']
})
export class TeamCreateComponent implements OnInit {
  teamForm: FormGroup;
  validMessage = '';

  constructor(private teamService: TeamService, private router: Router) { }

  ngOnInit(): void {
    this.teamForm = new FormGroup({
      name: new FormControl('', Validators.required),
    });
  }

  createTeam() {
    if (this.teamForm.valid) {
      let teamRequest: TeamRequest = new TeamRequest();
      teamRequest.name = this.teamForm.get('name').value;

      this.teamService.createTeam(teamRequest).subscribe((data) => {
        this.validMessage = 'Team created successfully';
        this.teamForm.reset();
        return true;
      });
      setTimeout(() => {
        this.router.navigate(['/home/teams']);
      },
      1000);
    } else {
      this.validMessage = 'Please fill the form!';
    } 
  }
}
