import { Component, OnInit } from '@angular/core';
import { ChampsService } from 'src/app/servicios/champs.service';

@Component({
  selector: 'app-champs',
  templateUrl: './champs.component.html',
  styleUrls: ['./champs.component.css']
})
export class ChampsComponent implements OnInit {
  champp: any = [];
  constructor(private _champservices: ChampsService) { 
    this.champp = this._champservices.GetChamps();
    console.log(this._champservices.GetChamps());
  }

  ngOnInit() {
  }

}
