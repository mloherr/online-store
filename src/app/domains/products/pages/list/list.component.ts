import { Component, inject, Input, signal, SimpleChange, SimpleChanges } from '@angular/core';

import { ProductComponent } from '@products/components/product/product.component';
import { Product } from '@shared/models/product.model';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { CategoryService } from '@shared/services/category.service';
import { Category } from '@shared/models/category.model';
import { RouterLinkWithHref } from '@angular/router';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, RouterLinkWithHref],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})


export class ListComponent {
  products = signal<Product[]>([]);
  categories = signal<Category[]>([]);
  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);
  @Input() category_id?: string;

  ngOnInit() {
    this.getCategories();
  };

  ngOnChanges(changes: SimpleChanges) {
      this.getProducts();
  };

  addToCart(product: Product) {
    this.cartService.addToCart(product)
  };

  private getProducts(){
    this.productService.getProducts(this.category_id)
    .subscribe({
      next: (products) => {
        const newProducts = products.filter((product) => {
          return product.category.name === 'Electronics' || product.category.name === 'Furniture' || product.category.name === 'Shoes'
       })
        this.products.set(newProducts);
      },
      error: () => {
      }
    })
  };

  private getCategories(){
    this.categoryService.getAllCategories()
    .subscribe({
      next: (data) => {
        const newData = data.filter((category) => {
           return category.name === 'Electronics' || category.name === 'Furniture' || category.name === 'Shoes'
        })
        this.categories.set(newData);
      },
      error: () => {
      }
    })
  };


}

