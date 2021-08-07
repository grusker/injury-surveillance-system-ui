import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { Router } from '@angular/router';
import { AthleteRequest } from 'src/app/models/AthleteRequest';
import { BodySide } from 'src/app/models/BodySide';
import { Gender } from 'src/app/models/Gender';
import { AthleteService } from 'src/app/services/athlete/athlete.service';
import { PhysioService } from 'src/app/services/physio/physio.service';

@Component({
  selector: 'app-athlete-create',
  templateUrl: './athlete-create.component.html',
  styleUrls: ['./athlete-create.component.css', '../../../app.component.css'],
})
export class AthleteCreateComponent implements OnInit {
  athleteForm: FormGroup;
  validMessage = '';

  physioList = [];
  genderEnum = [];
  dominantSideEnum = [];

  selectedPhysio;
  selectedGender;
  selectedDominantSide;

  constructor(
    private athleteService: AthleteService,
    private physioService: PhysioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.athleteForm = new FormGroup({
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      mobile: new FormControl('', Validators.required),
      height: new FormControl('', Validators.required),
      weight: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      dominantSide: new FormControl('', Validators.required),
      physioId: new FormControl('', Validators.required),
    });

    this.physioService.getPhysios().subscribe((data: any) => {
      this.physioList = data;
    });

    this.genderEnum = Object.keys(Gender);
    this.dominantSideEnum = Object.keys(BodySide);
  }

  physioSelection(event: MatSelectChange) {
    this.athleteForm.patchValue({
      physioId: event.value,
    });
  }

  dominantSideSelection(event: MatSelectChange) {
    this.athleteForm.patchValue({
      dominantSide: event.value,
    });
  }

  genderSelection(event: MatSelectChange) {
    this.athleteForm.patchValue({
      gender: event.value,
    });
  }

  createAthlete() {
    if (this.athleteForm.valid) {
      let athleteRequest: AthleteRequest = new AthleteRequest();
      athleteRequest.name = this.athleteForm.get('name').value;
      athleteRequest.surname = this.athleteForm.get('surname').value;
      athleteRequest.email = this.athleteForm.get('email').value;
      athleteRequest.mobile = this.athleteForm.get('mobile').value;
      athleteRequest.height = this.athleteForm.get('height').value;
      athleteRequest.weight = this.athleteForm.get('weight').value;
      athleteRequest.gender = this.athleteForm.get('gender').value;
      athleteRequest.dominantSide = this.athleteForm.get('dominantSide').value;
      athleteRequest.physioId = this.athleteForm.get('physioId').value;

      this.athleteService.createAthlete(athleteRequest).subscribe((data) => {
        this.validMessage = 'Athlete created successfully.';
        this.athleteForm.reset();
        return true;
      });
      this.router.navigate(['athlete-list']);
    } else {
      this.validMessage = 'Please fill the form!';
    }
  }
}
