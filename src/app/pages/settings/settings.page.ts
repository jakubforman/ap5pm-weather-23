import {Component, OnInit} from '@angular/core';
import {ModalController} from "@ionic/angular";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Place, PlacesService} from "../../services/places/places.service";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  /**
   * Přednastavené místa, ze kterých lze vybrat
   */
  places: Place[];

  /**
   * Formulář pro dynamické řešení zatrhávání míst pro hlavní stránku
   */
  form: FormGroup;

  constructor(
    private modalCtrl: ModalController,
    private placesService: PlacesService,
    private fb: FormBuilder
  ) {
    // Nastavení míst ze servisky imitující získávání dat
    // synchroní načtení. V praxy by byl zase Observable, skrze komunikaci se serverem
    this.places = this.placesService.places

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
      // Nahrazeno dynamickým generování níže...
      // ch1: [this.places[0].homepage, []],
      // výchozí hodnoty nastavím pomocí this.places[i].homepage, jelikož mi drží hodnotu zda-li se má zobrazit na hlavní stránce
      // Nahrazeno dynamickým generování níže...
      // ch2: [this.places[1].homepage, []],
    })
    // dynamické naplnění formuláře
    // využívá vytvoření nových klíčů uvnitř objektu FormGroup a jim jako value nastaví FormControl
    // lépe využít FormArray, ale ta má komplexnější využití a implementace není zprvu snadná
    this.places.forEach((place, i) => {
      // dynamické přidání ovládacího prvku pro formulář (stejný princip indexace ch1...chn jak na view)
      this.form.addControl("ch" + (i + 1), new FormControl(place.homepage));
    })

    // odběr změn ve formuláři
    this.form.valueChanges.subscribe(data => {
      // projdu všechny místa skrze index (bylo by možné i skrze data ale musel by se objekt přeložit do pole)
      // pozor na rychlost načtení dat, pokud data budou zpracovány pomalu a uživatel 2x vyvolá tuto akci
      // může dojít k zacyklení...
      // uvnitř by se nemělo čekat skrze await a asynchroní requesty (čekat, spouštění je dovoleno)
      this.places.forEach((place, i) => {
        // nastavení na servisce
        // uložení stavu - zobrazovat | nezobrazovat na hlavní stránce
        // simulace volání requesttu
        this.placesService.setHome(i, data["ch" + (i + 1)]);
      })
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
