
/* Always import the Component symbol from the Angular core library and annotate the component class with @Component. */

import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

/* @Component is a decorator function that specifies the Angular metadata for the component.
The CLI generated three metadata properties:
*/
@Component({
  selector: 'appLE-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

/*The ngOnInit is a lifecycle hook Angular calls ngOnInit shortly after creating a component. It's a good place to put initialization logic. */
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  constructor() { }

  /*The ngOnInit is a lifecycle hook Angular calls ngOnInit shortly after creating a component. It's a good place to put initialization logic. */
  ngOnInit() {

  }
 
}
