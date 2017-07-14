import { Component, Input } from '@angular/core';
import { Cat } from './cat';

@Component({
selector: 'cat-list',
template:`
<ul class="heroes cats">
  <li *ngFor="let cat of cats" (click)="onSelect(cat)" >
    {{cat.name}} Color: {{cat.color}} Popularity: {{cat.popularity}}
  </li>
</ul>
`
})

export class CatListComponent{
    @Input() cats: Cat;
    onSelect(cat: Cat): void {
        //alert(cat.name);
        cat.popularity += 1;
    }
}