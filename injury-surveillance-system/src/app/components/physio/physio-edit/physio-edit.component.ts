import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PhysioRequest } from 'src/app/models/PhysioRequest';
import { PhysioService } from 'src/app/services/physio/physio.service';

@Component({
  selector: 'app-physio-edit',
  templateUrl: './physio-edit.component.html',
  styleUrls: ['./physio-edit.component.css', '../../../app.component.css']
})
export class PhysioEditComponent implements OnInit {
  public physioId: number;
  public physio: PhysioRequest;
  public physioForm: FormGroup;
  

  constructor(private route: ActivatedRoute, private physioService: PhysioService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
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

  editPhysio() {

  }

}
