import {Component, OnInit} from '@angular/core';
import {ModalController} from "@ionic/angular";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  /**
   * Přednastavené místa, ze kterých lze vybrat
   *
   * TODO: místa je třeba načítat automaticky ze servisky
   */
  places: any[] = [
    {
      lat: 0,
      lng: 0,
      name: "Praha",
      homepage: false
    },
    {
      lat: 0,
      lng: 0,
      name: "Berlín",
      homepage: false
    },
  ]

  /**
   * Formulář pro dynamické řešení zatrhávání míst pro hlavní stránku
   */
  form: FormGroup;

  constructor(
    private modalCtrl: ModalController,
    private fb: FormBuilder
  ) {

    // Struktura vytvořeného formuláře níže pomocí this.fb.group(...)
    /*
    {
      ch1: bool,
      ch2: bool,
      ....
    }
    */


    // Dynamické vytvořneí formuláře (new FormGrou) pomocí servisky
    this.form = this.fb.group({
      // formulářový prvke ch1, který je navázán ve view na formControlName="ch{{i + 1}}"
      ch1: [this.places[0].homepage, []],
      // výchozí hodnoty nastavím pomocí this.places[i].homepage, jelikož mi drží hodnotu zda-li se má zobrazit na hlavní stránce
      ch2: [this.places[1].homepage, []],
      // TODO: další prvky
    })

    // odběr změn ve formuláři
    this.form.valueChanges.subscribe(data => {
      console.log(data);
    })
  }

  ngOnInit() {
  }

  /**
   * Modal Dismiss
   */
  async dismiss() {
    await this.modalCtrl.dismiss();
  }

}
