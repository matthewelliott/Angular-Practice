import { Component } from '@angular/core';
import { Cat } from './cat';
import { CatService } from './cat.service';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'my-heroes',
  template: `
    
    <h2>My Heroes</h2>
<ul class="heroes">  
  <li *ngFor="let hero of heroes" (click)="onSelect(hero)">
   <span class="badge">{{hero.id}}</span> {{hero.name}}
  </li>
</ul>
<hero-detail [hero]="selectedHero"></hero-detail>

<cat-list [cats]="cats"></cat-list>

    `,
    styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`],
providers: [[HeroService],[CatService]]

})
export class HeroesComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[];  
  selectedHero: Hero;
  
  cats: Cat[];
  
  onSelect(hero: Hero): void {
  this.selectedHero = hero;
  this.selectedHero.id++;
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    //this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  getCats(): void {
    this.catService.getCats().then(cats => this.cats = cats );
  }

  ngOnInit(): void {
    this.getHeroes();
    this.getCats();
  }

  constructor(private heroService: HeroService, private catService: CatService) { }
}