import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WpPagePage } from './wppage.page';
import { WpPageResolver } from './wppage.resolver';

const routes: Routes = [
  {
    path: '',
    component: WpPagePage,
    resolve: {
      data: WpPageResolver
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WpPagePage],
  providers: [WpPageResolver]
})
export class wppagePageModule { }
