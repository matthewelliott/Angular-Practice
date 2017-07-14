import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HeroDetailComponent } from './hero-detail.component';
import { CatListComponent } from './cat-list.component';
import { HeroesComponent }     from './heroes.component';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    CatListComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroesComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
