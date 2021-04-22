import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { KeyReaderModule } from './key-reader/key-reader.module';
import { KeyService } from './services/key/key.service';
import { StorageService } from './services/storage/storage.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, KeyReaderModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, KeyService, StorageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
