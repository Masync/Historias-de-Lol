import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/compa/navbar/navbar.component';
import { FooterComponent } from './componentes/compa/footer/footer.component';
import { HomeComponent } from './componentes/home/home.component';
import { AboutComponent } from './componentes/about/about.component';
import { ChampsComponent } from './componentes/champs/champs.component';
import { ChampComponent } from './componentes/champ/champ.component';
import { SearchComponent } from './componentes/search/search.component';
import { ChampsService } from './servicios/champs.service';
import { ChampsTarjetaComponent } from './componentes/champs-tarjeta/champs-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ChampsComponent,
    ChampComponent,
    SearchComponent,
    ChampsTarjetaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ChampsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
