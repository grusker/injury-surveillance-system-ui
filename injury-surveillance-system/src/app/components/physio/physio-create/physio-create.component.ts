import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PhysioRequest } from 'src/app/models/PhysioRequest';
import { PhysioService } from 'src/app/services/physio/physio.service';

@Component({
  selector: 'app-physio-create',
  templateUrl: './physio-create.component.html',
  styleUrls: ['./physio-create.component.css']
})
export class PhysioCreateComponent implements OnInit {
  physioForm: FormGroup;
  validMessage = '';

  constructor(private physioService: PhysioService) { }

  ngOnInit(): void {
    this.physioForm = new FormGroup({
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      mobile: new FormControl('', Validators.required)
    });
  }

  createPhysio() {
    if(this.physioForm.valid) {
      let physioRequest: PhysioRequest = new PhysioRequest();
      physioRequest.name = this.physioForm.get("name").value;
      physioRequest.surname = this.physioForm.get("surname").value;
      physioRequest.email = this.physioForm.get("email").value;
      physioRequest.mobile = this.physioForm.get("mobile").value;

      this.physioService.createPhysio(physioRequest).subscribe(
        data => {
         this.validMessage = "Physio created succesfully.";
         this.physioForm.reset();
         return true; 
        });
    } else {
      this.validMessage = "Please fill the form!";
    }
    
  }

}
