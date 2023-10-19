## Start 


V nové složce
```sh
ionic start sheet blank --type=angular
cd sheet
ionic serve
```

sheet/src/app/home
```sh
ionic g c deposit-modal
```



* sheet/src/app/home/home.page.html  
* sheet/src/app/home/home.page.ts  
  
modal (html a ts)
* deposit-modal.component.html  
* deposit-modal.component.ts  



```ts
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DepositModalComponent } from './deposit-modal/deposit-modal.component';


class Account {
  name: string;
  balance: number;

  constructor(name: string, balance: number){
    this.name = name;
    this.balance = balance;
  }
}


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {
  balances: Account[] = [
    {
      name: "Filip",
      balance: 100000
    },

    {
      name: "Karel",
      balance: 80000
    },

    {
      name: "Jana",
      balance: 70000
    }
];

  constructor(private modalCTRL: ModalController) {}

  async openModal(account: Account){
   // alert(account.name);

    const modal = await this.modalCTRL.create({
      component: DepositModalComponent,
      componentProps: {
        name: account.name,
        balance: account.balance
      }
   });

   await modal.present();

  }

}

```


```html

<ion-header [translucent]="true">
  <ion-toolbar>
    <ion-title>
      Blank
    </ion-title>
  </ion-toolbar>
</ion-header>

<ion-content [fullscreen]="true">
  <ion-header collapse="condense">
    <ion-toolbar>
      <ion-title size="large">Blank</ion-title>
    </ion-toolbar>
  </ion-header>

  <div id="container">
    <h2>Balances</h2>


    <ion-list>
      <ion-item 
      *ngFor="let account of balances"
      (click)="openModal(account)">
        <ion-label>
          <h2>{{ account.name}}</h2>
          <h3>{{ account.balance}}</h3>
        </ion-label>
      </ion-item>
    </ion-list>
  </div>




</ion-content>

```



home.module.ts


```ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';

// added
import { DepositModalComponent } from './deposit-modal/deposit-modal.component';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    // added
    ReactiveFormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, DepositModalComponent]
})
export class HomePageModule {}

```

