import { Component, ElementRef,OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', {static: true}) nameInputReference: ElementRef;
  @ViewChild('amountInput', {static: true}) amountInputReference: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddItem() {
    const newIngredient = new Ingredient(
      this.nameInputReference.nativeElement.value,
      this.amountInputReference.nativeElement.value
      );
    this.shoppingListService.addIngredient(newIngredient);
  }

}
