import { Component, inject, Input, signal, SimpleChanges } from '@angular/core';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  hideAsideMenu = signal(true);
  private cartService = inject(CartService);
  cart = this.cartService.cart;
  total = this.cartService.totalPrice;


  toggleAsideMenu = () => {
    this.hideAsideMenu.update(prevState => !prevState);
  };

}
