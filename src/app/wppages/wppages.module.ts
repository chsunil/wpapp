import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WpPages } from './wppages.page';
import { WpPagesResolver } from './wppages.resolver';

const routes: Routes = [
  {
    path: '',
    component: WpPages,
    resolve: {
      data: WpPagesResolver
    },
    runGuardsAndResolvers: 'paramsOrQueryParamsChange' // because we use the same route for all posts and for category posts, we need to add this to refetch data 
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WpPages],
  providers: [WpPagesResolver]
})
export class WpPageModule { }
