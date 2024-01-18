import { Component, OnInit } from '@angular/core';
import { AthleteService } from 'src/app/services/athlete/athlete.service';

@Component({
  selector: 'app-athlete-list',
  templateUrl: './athlete-list.component.html',
  styleUrls: ['./athlete-list.component.css', '../../../app.component.css'],
})
export class AthleteListComponent implements OnInit {
  public athletes: any;
  public displayedColumns: any;

  constructor(private athleteService: AthleteService) {}

  ngOnInit(): void {
    this.displayedColumns = [
      'fullName',
      'email',
      'mobile',
      'age',
      'gender',
      'branch',
      'team',
      'edit',
    ];
    this.getAthletes();
  }

  getAthletes() {
    this.athleteService.getAthletes().subscribe((data: any) => {
      this.athletes = data;
    });
  }
}
