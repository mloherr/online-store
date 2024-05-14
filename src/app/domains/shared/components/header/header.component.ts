import { Component, Input, signal, SimpleChanges } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  hideAsideMenu = signal(true);
  @Input({required: true}) cart: Product[] = [];

  totalPrice = signal(0);

  toggleAsideMenu = () => {
    this.hideAsideMenu.update(prevState => !prevState);
  };

  ngOnChanges(changes: SimpleChanges) {
   const cart = changes['cart'];
   if(cart) {
    this.totalPrice.set(this.calculateTotalPrice())
   };
  };

  calculateTotalPrice = () => {
    return this.cart.reduce((total, product) =>
       total + product.price, 0)
  };

}
