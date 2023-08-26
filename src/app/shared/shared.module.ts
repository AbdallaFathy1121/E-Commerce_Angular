import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { LoadingComponent } from './components/loading/loading.component';
import { SelectComponent } from './components/select/select.component';


@NgModule({
  declarations: [
    HeaderComponent,
    LoadingComponent,
    SelectComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    LoadingComponent,
    SelectComponent,
    CommonModule
  ]
})
export class SharedModule { }
