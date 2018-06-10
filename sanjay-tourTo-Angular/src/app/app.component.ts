/* Always import the Component symbol from the Angular core library and annotate the component class with @Component. */
import { Component } from '@angular/core';

/* @Component is a decorator function that specifies the Angular metadata for the component. */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Tour of Angular 6';
}
