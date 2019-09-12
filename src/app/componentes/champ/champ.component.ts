import { Component, OnInit } from '@angular/core';
import { ChampsService, Champ} from 'src/app/servicios/champs.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-champ',
  templateUrl: './champ.component.html',
  styleUrls: ['./champ.component.css']
})
export class ChampComponent {
  public champp: Champ[] = [];
  // tslint:disable-next-line: variable-name
  champ: any = [];
  constructor(private aRoute: ActivatedRoute, private _services: ChampsService) { 
    this.aRoute.params.subscribe(params => {
// tslint:disable-next-line: no-string-literal
  this.champ = this._services.GetChamp(params['id']);
    });
  }

}
