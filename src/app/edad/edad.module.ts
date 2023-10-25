import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { EdadPageRoutingModule } from './edad-routing.module';

import { EdadPage } from './edad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EdadPageRoutingModule,
    HttpClientModule,
  ],
  declarations: [EdadPage]
})
export class EdadPageModule {}
