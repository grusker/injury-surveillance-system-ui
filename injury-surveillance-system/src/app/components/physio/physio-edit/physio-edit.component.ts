import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PhysioRequest } from 'src/app/models/PhysioRequest';
import { PhysioService } from 'src/app/services/physio/physio.service';

@Component({
  selector: 'app-physio-edit',
  templateUrl: './physio-edit.component.html',
  styleUrls: ['./physio-edit.component.css', '../../../app.component.css'],
})
export class PhysioEditComponent implements OnInit {
  public physioId: number;
  public physio: PhysioRequest;
  public physioForm: FormGroup;
  validMessage = '';

  constructor(
    private route: ActivatedRoute,
    private physioService: PhysioService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.physioId = parseInt(params.get('physioId'));

      this.physioService.getPhysio(this.physioId).subscribe((data: any) => {
        this.physio = data;

        this.physioForm = this.formBuilder.group({
          name: new FormControl(this.physio.name, Validators.required),
          surname: new FormControl(this.physio.surname, Validators.required),
          email: new FormControl(this.physio.email, Validators.required),
          mobile: new FormControl(this.physio.mobile, Validators.required),
        });
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

      this.physioService.updatePhysio(this.physioId, updatedPhysio).subscribe((data) => {
        this.validMessage = 'Physio updated succesfully.';
        return true;
      });
      setTimeout(() => {
        this.router.navigate(['physio-list']);
      }, 1000);
    } else {
      this.validMessage = 'Please fill the form!';
    }
  }
}
