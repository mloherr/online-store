import { Component, inject, Input, signal, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { CartService } from '@shared/services/cart.service';
import { RouterLinkWithHref, RouterLinkActive } from '@angular/router';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLinkWithHref, RouterLinkActive],
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

  removeFromCartHandler(product: Product) {
    this.cartService.removeFromCart(product)
  };


}
