import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styles: []
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;  // define `recipe` Property, `@Input` to bind to mother-component 'recipe-list.component.html'
  @Output() recipeSelected = new EventEmitter<Recipe>(); // define an Event-Object

  constructor() { }

  ngOnInit() {
  }

  onSelect() {
    this.recipeSelected.emit(this.recipe);
  }

}
