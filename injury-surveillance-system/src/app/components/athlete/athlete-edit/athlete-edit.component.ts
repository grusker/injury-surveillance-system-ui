import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { ActivatedRoute, Router } from '@angular/router';
import { AthleteRequest } from 'src/app/models/AthleteRequest';
import { BodyInfoRequest } from 'src/app/models/BodyInfoRequest';
import { SportInfoRequest } from 'src/app/models/SportInfoRequest';
import { BodySide } from 'src/app/models/enums/BodySide';
import { Gender } from 'src/app/models/enums/Gender';
import { SportBranch } from 'src/app/models/enums/SportBranch';
import { AthleteService } from 'src/app/services/athlete/athlete.service';
import { TeamService } from 'src/app/services/team/team.service';

@Component({
  selector: 'app-athlete-edit',
  templateUrl: './athlete-edit.component.html',
  styleUrls: ['./athlete-edit.component.css', '../../../app.component.css'],
})
export class AthleteEditComponent implements OnInit {
  athleteId: number;
  athlete: any;
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

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private athleteService: AthleteService,
    private teamService: TeamService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.athleteId = parseInt(params.get('athleteId'));

      this.teamService.getTeams().subscribe((data: any) => {
        this.teamList = data;
      })

      this.athleteService.getAthlete(this.athleteId).subscribe((data: any) => {

        this.athletePersonalInfoForm = this.formBuilder.group({
          name: new FormControl(data.name, Validators.required),
          surname: new FormControl(data.surname, Validators.required),
          email: new FormControl(data.email, Validators.required),
          mobile: new FormControl(data.mobile, Validators.required),
          age: new FormControl(data.age, Validators.required),
          gender: new FormControl(data.gender, Validators.required),
        });

        this.athleteSportInfoForm = this.formBuilder.group({
          teamId: new FormControl(data.sportInfo.team, Validators.required),
          branch: new FormControl(data.sportInfo.branch, Validators.required),
          position: new FormControl(data.sportInfo.position, Validators.required),
          sportAge: new FormControl(data.sportInfo.sportAge, Validators.required),
          weeklyTrainingHours: new FormControl(data.sportInfo.weeklyTrainingHours, Validators.required),
        });

        this.athleteSportInfoForm.get('teamId').setValue(data.sportInfo.team.id);

        this.athleteBodyInfoForm = this.formBuilder.group({
          height: new FormControl(data.bodyInfo.height, Validators.required),
          weight: new FormControl(data.bodyInfo.weight, Validators.required),
          dominantSide: new FormControl(data.bodyInfo.dominantSide, Validators.required),
          lowerExtremityDominantSide: new FormControl(data.bodyInfo.lowerExtremityDominantSide, Validators.required),
          upperExtremityDominantSide: new FormControl(data.bodyInfo.upperExtremityDominantSide, Validators.required),
          lowerExtremityLength: new FormControl(data.bodyInfo.lowerExtremityLength, Validators.required),
          upperExtremityLength: new FormControl(data.bodyInfo.upperExtremityLength, Validators.required),
        });
      });
      
      this.genderEnum = Object.keys(Gender);
      this.dominantSideEnum = Object.keys(BodySide);
      this.branchEnum = Object.keys(SportBranch);
      this.lowerExtremityDominantSideEnum = Object.keys(BodySide);
      this.upperExtremityDominantSideEnum = Object.keys(BodySide);
    });
  }

  teamSelection(event: MatSelectChange) {
    this.athleteSportInfoForm.patchValue({
      teamId: event.value,
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

  dominantSideSelection(event: MatSelectChange) {
    this.athleteBodyInfoForm.patchValue({
      dominantSide: event.value,
    });
  }

  updateAthlete() {
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

      this.athleteService.updateAthlete(this.athleteId, athleteRequest).subscribe((data) => {
        this.validMessage = 'Athlete updated successfully.';
        return true;
      });
      setTimeout(() => {
        this.router.navigate(['athlete-list']);
      },
      1000);
    } else {
      this.validMessage = 'Please fill the form!';
    }
  }
}
