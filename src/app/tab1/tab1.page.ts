import {Component} from '@angular/core';
import {WeatherApiService} from "../services/weather-api/weather-api.service";
import {Observable} from "rxjs";
import {Weather} from "../models/weather.model";
import {ModalController} from "@ionic/angular";
import {SettingsPage} from "../pages/settings/settings.page";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  // Klasický zápis
  // nutné přepsat data pokaždé když data získám
  // je nutné kontrolovat existenci objektu a dalších zanořených objektů dodatečnýma podmínkama viz view
  /**
   * @deprecated Tento způsob není doporučován, lepší možnost je použít weather$ s kombinací s pipou async
   */
  data: any = {};

  // Pokročilejší zápis
  // využívá obserable pattern
  // datový typ se uvádí do <...> - generika
  weather$: Observable<Weather>;

  constructor(
    // Vložím servisku pro Dependency Injection (má vlastní serviska)
    // private je doporučeno pro koncové třídy,
    //  pokud by se jednalo o abstraktní třídu, nebo třídu určenou k dědění použil bych public nebo protected
    private weatherApiService: WeatherApiService,
    private modalCtrl: ModalController
  ) {
    // nastavým výstup funkce při načtení stránky (pozor, před načtením view)
    // zde se žádná data nezískávají!!! data se získají až ve view pomocí | async (pipy async)
    // až pipa async provede onen .subscribe(...), který získá data
    // zde se pouze předavají stejné datové typy getByGeo$(...): Observable<...> >>> this.weather$: Observable<any>
    this.weather$ = this.weatherApiService.getByGeo$(0, 0)
  }

  /**
   * Get manual data
   *
   * @deprecated Tento způsob není doporučován, lepší možnost je použít weather$ s kombinací s pipou async
   */
  fetchData() {
    // získám data na pozici GEO 0,0 pomocí metody .subscribe(...)
    // používám servisku, které umožňuje přenášet logiku skrze Dependency Injection (DI)
    this.weatherApiService.getByGeo$(0, 0).subscribe(data => {
      // data získaná z requestu předám to proměnné this.data abych je mohl vypsat ve view (nahradím původní objekt uložený v data)
      this.data = data;
    })
  }

  /**
   * Modal open
   */
  async openSettings() {

    // umožňuji vytvořit modalové okno (překryv)
    // component = libovolný komponent/stránka (stránka je to samé, jen využívá lazy loading pomocí modulu)
    const modal = await this.modalCtrl.create({
      component: SettingsPage,
    });

    // prezentace modalu po dalším nastaení (spustí animaci a dlaší části modalu)
    await modal.present();

    // možnost získávání dat před zavřením (onWillDismiss) nebo po zavření (onDidDismiss)
    // daty je myšleno to co modal (SettingsPage) zaslal v dismiss metodě >> this.modalCtrl.dismiss({...})
    // doporučuje se využít spíše .then() místo await struktury
    // data jsou pro onWillDismiss i onDidDismiss stejná.
    /*
    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      this.message = `Hello, ${data}!`;
    }
    */
  }
}
