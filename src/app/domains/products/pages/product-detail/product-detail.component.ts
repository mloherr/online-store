import { Component, inject, Input, signal } from '@angular/core';
import { ProductService } from '@shared/services/product.service';
import { CommonModule } from '@angular/common';
import { Product } from '@shared/models/product.model';
import { CartService } from '@shared/services/cart.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  @Input() id?:string;
  product = signal<Product | null>(null);
  cover = signal('');
  private productService = inject(ProductService);
  private cartSservice = inject(CartService);

  ngOnInit(){
    if(this.id){
      this.productService.getOneProduct(this.id)
      .subscribe({
        next: (product) => {
          this.product.set(product);
          if(product.images.length > 0) {
            this.cover.set(product.images[0])
          }
        }
      })
    }
  };

  changeCover(newImage: string){
    this.cover.set(newImage)
  };

  addToCart(){
    const product = this.product();
    if(product) {
      this.cartSservice.addToCart(product);
    }
  };

}