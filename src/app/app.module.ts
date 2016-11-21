import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyAppComponent } from './app.component';
import { HomePageComponent } from '../pages/home/home';
import { InventoryPageComponent } from '../pages/inventory/inventory';
import { InventoryManagerComponent } from '../pages/inventory/inventoryManagement/inventoryManager';
import { AboutComponent } from '../pages/settings/about/about';
import { SettingsPageComponent } from '../pages/settings/settings';

import { TopIconButtonComponent } from '../components/top-icon-button';

@NgModule({
  declarations: [
    MyAppComponent,
    HomePageComponent,
    InventoryPageComponent,
    InventoryManagerComponent,
    SettingsPageComponent,
    AboutComponent,

    TopIconButtonComponent
  ],
  imports: [
    IonicModule.forRoot(MyAppComponent)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyAppComponent,
    HomePageComponent,
    InventoryPageComponent,
    InventoryManagerComponent,
    SettingsPageComponent,
    AboutComponent
  ],
  providers: []
})
export class AppModule {}
