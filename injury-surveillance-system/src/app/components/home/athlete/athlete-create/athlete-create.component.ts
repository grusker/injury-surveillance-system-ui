import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { Router } from '@angular/router';
import { AthleteRequest } from 'src/app/models/AthleteRequest';
import { BodyInfoRequest } from 'src/app/models/BodyInfoRequest';
import { SportInfoRequest } from 'src/app/models/SportInfoRequest';
import { BodySide } from 'src/app/models/enums/BodySide';
import { Gender } from 'src/app/models/enums/Gender';
import { SportBranch } from 'src/app/models/enums/SportBranch';
import { AthleteService } from 'src/app/services/athlete/athlete.service';
import { TeamService } from 'src/app/services/team/team.service';

@Component({
  selector: 'app-athlete-create',
  templateUrl: './athlete-create.component.html',
  styleUrls: ['./athlete-create.component.css', '../../../../app.component.css'],
})
export class AthleteCreateComponent implements OnInit {
  athletePersonalInfoForm: FormGroup;
  athleteBodyInfoForm: FormGroup;
  athleteSportInfoForm: FormGroup;
  validMessage = '';

  teamList = [];
  genderEnum = [];
  dominantSideEnum = [];
  branchEnum = [];
  lowerExtremityDominantSideEnum = [];
  upperExtremityDominantSideEnum = [];

  selectedPhysio;
  selectedGender;
  selectedDominantSide;

  constructor(
    private athleteService: AthleteService,
    private teamService: TeamService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.athletePersonalInfoForm = new FormGroup({
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      mobile: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
    });

    this.athleteBodyInfoForm = new FormGroup({
      height: new FormControl('', Validators.required),
      weight: new FormControl('', Validators.required),
      dominantSide: new FormControl('', Validators.required),
      lowerExtremityDominantSide: new FormControl('', Validators.required),
      upperExtremityDominantSide: new FormControl('', Validators.required),
      lowerExtremityLength: new FormControl('', Validators.required),
      upperExtremityLength: new FormControl('', Validators.required),
    })

    this.athleteSportInfoForm = new FormGroup({
      teamId: new FormControl('', Validators.required),
      branch: new FormControl('', Validators.required),
      position: new FormControl('', Validators.required),
      sportAge: new FormControl('', Validators.required),
      weeklyTrainingHours: new FormControl('', Validators.required),
    })

    this.teamService.getTeams().subscribe((data: any) => {
      this.teamList = data;
    })

    this.genderEnum = Object.keys(Gender);
    this.dominantSideEnum = Object.keys(BodySide);
    this.branchEnum = Object.keys(SportBranch);
    this.lowerExtremityDominantSideEnum = Object.keys(BodySide);
    this.upperExtremityDominantSideEnum = Object.keys(BodySide);
  }

  teamSelection(event: MatSelectChange) {
    this.athleteSportInfoForm.patchValue({
      teamId: event.value,
    });
  }

  dominantSideSelection(event: MatSelectChange) {
    this.athleteBodyInfoForm.patchValue({
      dominantSide: event.value,
    });
  }

  genderSelection(event: MatSelectChange) {
    this.athletePersonalInfoForm.patchValue({
      gender: event.value,
    });
  }

  branchSelection(event: MatSelectChange) {
    this.athleteSportInfoForm.patchValue({
      branch: event.value,
    })
  }

  lowerExtremityDominantSideSelection(event: MatSelectChange) {
    this.athleteBodyInfoForm.patchValue({
      lowerExtremityDominantSide: event.value,
    });
  }

  upperExtremityDominantSideSelection(event: MatSelectChange) {
    this.athleteBodyInfoForm.patchValue({
      upperExtremityDominantSide: event.value,
    });
  }

  createAthlete() {
    if (this.athletePersonalInfoForm.valid &&
      this.athleteBodyInfoForm.valid &&
      this.athleteSportInfoForm.valid ) {
        let sportInfoRequest: SportInfoRequest = new SportInfoRequest();
        sportInfoRequest.branch = this.athleteSportInfoForm.get('branch').value;
        sportInfoRequest.teamId = this.athleteSportInfoForm.get('teamId').value;
        sportInfoRequest.position = this.athleteSportInfoForm.get('position').value;
        sportInfoRequest.sportAge = this.athleteSportInfoForm.get('sportAge').value;
        sportInfoRequest.weeklyTrainingHours = this.athleteSportInfoForm.get('weeklyTrainingHours').value;
        

        let bodyInfoRequest: BodyInfoRequest = new BodyInfoRequest();
        bodyInfoRequest.height = this.athleteBodyInfoForm.get('height').value;
        bodyInfoRequest.weight = this.athleteBodyInfoForm.get('weight').value;
        bodyInfoRequest.dominantSide = this.athleteBodyInfoForm.get('dominantSide').value;
        bodyInfoRequest.lowerExtremityDominantSide = this.athleteBodyInfoForm.get('lowerExtremityDominantSide').value;
        bodyInfoRequest.upperExtremityDominantSide = this.athleteBodyInfoForm.get('upperExtremityDominantSide').value;
        bodyInfoRequest.lowerExtremityLength = this.athleteBodyInfoForm.get('lowerExtremityLength').value;
        bodyInfoRequest.upperExtremityLength = this.athleteBodyInfoForm.get('upperExtremityLength').value;

    
        let athleteRequest: AthleteRequest = new AthleteRequest();
        athleteRequest.name = this.athletePersonalInfoForm.get('name').value;
        athleteRequest.surname = this.athletePersonalInfoForm.get('surname').value;
        athleteRequest.email = this.athletePersonalInfoForm.get('email').value;
        athleteRequest.mobile = this.athletePersonalInfoForm.get('mobile').value;
        athleteRequest.age = this.athletePersonalInfoForm.get('age').value;
        athleteRequest.gender = this.athletePersonalInfoForm.get('gender').value;
        athleteRequest.sportInfo = sportInfoRequest;
        athleteRequest.bodyInfo = bodyInfoRequest;

      this.athleteService.createAthlete(athleteRequest).subscribe((data) => {
        this.validMessage = 'Athlete created successfully.';
        this.athletePersonalInfoForm.reset();
        return true;
      });
      setTimeout(() => {
        this.router.navigate(['athletes']);
      },
      1000);
    } else {
      this.validMessage = 'Please fill the form!';
    }
  }
}
