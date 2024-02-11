import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { ActivatedRoute, Router } from '@angular/router';
import { PhysioRequest } from 'src/app/models/PhysioRequest';
import { PhysioService } from 'src/app/services/physio/physio.service';
import { TeamService } from 'src/app/services/team/team.service';

@Component({
  selector: 'app-physio-edit',
  templateUrl: './physio-edit.component.html',
  styleUrls: ['./physio-edit.component.css', '../../../../app.component.css'],
})
export class PhysioEditComponent implements OnInit {
  public physioId: number;
  public physioForm: FormGroup;
  validMessage = '';
  teamList = [];

  constructor(
    private route: ActivatedRoute,
    private physioService: PhysioService,
    private teamService: TeamService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.teamService.getTeams().subscribe((data: any) => {
        this.teamList = data;
      })

      this.physioId = parseInt(params.get('physioId'));

      this.physioService.getPhysio(this.physioId).subscribe((data: any) => {

        this.physioForm = this.formBuilder.group({
          name: new FormControl(data.name, Validators.required),
          surname: new FormControl(data.surname, Validators.required),
          email: new FormControl(data.email),
          mobile: new FormControl(data.mobile, Validators.required),
          teamId: new FormControl(data.teamId, Validators.required),
        });
        this.physioForm.get('teamId').setValue(data.team.id);
      });
    });
  }

  updatePhysio() {
    if (this.physioForm.valid) {
      let updatedPhysio: PhysioRequest = new PhysioRequest();
      updatedPhysio.name = this.physioForm.get('name').value;
      updatedPhysio.surname = this.physioForm.get('surname').value;
      updatedPhysio.email = this.physioForm.get('email').value;
      updatedPhysio.mobile = this.physioForm.get('mobile').value;
      updatedPhysio.teamId = this.physioForm.get('teamId').value;

      this.physioService.updatePhysio(this.physioId, updatedPhysio).subscribe((data) => {
        this.validMessage = 'Physio updated succesfully.';
        return true;
      });
      setTimeout(() => {
        this.router.navigate(['physios']);
      }, 1000);
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
