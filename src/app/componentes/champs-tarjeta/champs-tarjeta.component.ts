import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-champs-tarjeta',
  templateUrl: './champs-tarjeta.component.html',
  styleUrls: ['./champs-tarjeta.component.css']
})
export class ChampsTarjetaComponent implements OnInit {
  @Input() item: any = {};
  @Input() idx: number;
  constructor(private route: Router) { }

  verCampeon() {
    this.route.navigate(['/champ', this.idx]);
  }
  ngOnInit() {
  }

}
