import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { LoadingComponent } from './components/loading/loading.component';


@NgModule({
  declarations: [
    HeaderComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    LoadingComponent,
    CommonModule
  ]
})
export class SharedModule { }
