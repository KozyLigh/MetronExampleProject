import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import {MetronDesignSystemLibModule} from '@nudgelabs/metron-design-system-lib';
import {MaterialModule} from '../shared/material/material.module';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MetronDesignSystemLibModule,
    MaterialModule
  ]
})
export class LayoutModule { }
