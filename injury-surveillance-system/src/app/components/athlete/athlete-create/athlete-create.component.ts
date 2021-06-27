import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AthleteRequest } from 'src/app/models/AthleteRequest';
import { AthleteService } from 'src/app/services/athlete/athlete.service';

@Component({
  selector: 'app-athlete-create',
  templateUrl: './athlete-create.component.html',
  styleUrls: ['./athlete-create.component.css']
})
export class AthleteCreateComponent implements OnInit {
  athleteForm: FormGroup;
  validMessage = '';

  constructor(private athleteService: AthleteService) { }

  ngOnInit(): void {
    this.athleteForm = new FormGroup({
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      mobile: new FormControl('', Validators.required),
      height: new FormControl('', Validators.required),
      weight: new FormControl('', Validators.required),
      sex: new FormControl('', Validators.required),
      dominantSide: new FormControl('', Validators.required),
      physioId: new FormControl('', Validators.required)
    });
  }

  createAthlete() {
    if(this.athleteForm.valid) {
      let athleteRequest: AthleteRequest = new AthleteRequest();
      athleteRequest.name = this.athleteForm.get("name").value;
      athleteRequest.surname = this.athleteForm.get("surname").value;
      athleteRequest.email = this.athleteForm.get("email").value;
      athleteRequest.mobile = this.athleteForm.get("mobile").value;
      athleteRequest.height = this.athleteForm.get("height").value;
      athleteRequest.weight = this.athleteForm.get("weight").value;
      athleteRequest.sex = this.athleteForm.get("sex").value;
      athleteRequest.dominantSide = this.athleteForm.get("dominantSide").value;
      athleteRequest.physioId = this.athleteForm.get("physioId").value;

      this.athleteService.createAthlete(athleteRequest).subscribe(
        data => {
          this.validMessage = "Athlete created successfully.";
          this.athleteForm.reset();
          return true;
        }
      )
    } else {
      this.validMessage = "Please fill the form!";
    }
  }

}
