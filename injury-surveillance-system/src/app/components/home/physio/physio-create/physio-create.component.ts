import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { Router } from '@angular/router';
import { PhysioRequest } from 'src/app/models/PhysioRequest';
import { PhysioService } from 'src/app/services/physio/physio.service';
import { TeamService } from 'src/app/services/team/team.service';

@Component({
  selector: 'app-physio-create',
  templateUrl: './physio-create.component.html',
  styleUrls: ['./physio-create.component.css', '../../../../app.component.css'],
})
export class PhysioCreateComponent implements OnInit {
  physioForm: FormGroup;
  validMessage = '';
  teamList = [];

  constructor(
    private physioService: PhysioService, 
    private teamService: TeamService, 
    private router: Router) {}

  ngOnInit(): void {
    this.physioForm = new FormGroup({
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      email: new FormControl(''),
      mobile: new FormControl('', Validators.required),
      teamId: new FormControl('', Validators.required),
    });

    this.teamService.getTeams().subscribe((data: any) => {
      this.teamList = data;
    })
  }

  createPhysio() {
    if (this.physioForm.valid) {
      let physioRequest: PhysioRequest = new PhysioRequest();
      physioRequest.name = this.physioForm.get('name').value;
      physioRequest.surname = this.physioForm.get('surname').value;
      physioRequest.email = this.physioForm.get('email').value;
      physioRequest.mobile = this.physioForm.get('mobile').value;
      physioRequest.teamId = this.physioForm.get('teamId').value;

      this.physioService.createPhysio(physioRequest).subscribe((data) => {
        this.validMessage = 'Physio created succesfully.';
        this.physioForm.reset();
        return true;
      });
      setTimeout(() => {
        this.router.navigate(['physios']);
      },
      1000);
    } else {
      this.validMessage = 'Please fill the form!';
    }
  }

  teamSelection(event: MatSelectChange) {
    this.physioForm.patchValue({
      teamId: event.value,
    });
  }
}
