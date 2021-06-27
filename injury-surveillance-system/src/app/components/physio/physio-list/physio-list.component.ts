import { Component, OnInit } from '@angular/core';
import { PhysioService } from 'src/app/services/physio/physio.service';

@Component({
  selector: 'app-physio-list',
  templateUrl: './physio-list.component.html',
  styleUrls: ['./physio-list.component.css']
})
export class PhysioListComponent implements OnInit {
  public physios: any;

  constructor(private physioService: PhysioService) { }

  ngOnInit(): void {
    this.getPhysios();
  }

  getPhysios() {
    this.physioService.getPhysios().subscribe(
      (data: any) => {
        this.physios = data;
      }
    )
  }

}
