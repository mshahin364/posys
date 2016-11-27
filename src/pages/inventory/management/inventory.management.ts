import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { StockItem } from '../../../models/stockitem';

@Component({
  templateUrl: 'inventory.management.html'
})
export class InventoryManagerComponent {
  stockItem: StockItem;

  constructor(public viewCtrl: ViewController, params: NavParams) {
    this.stockItem = params.get('stockItem');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}