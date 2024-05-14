import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent} from './../../components/product/product.component';
import {Product} from './../../../shared/models/product.model'
import { HeaderComponent } from './../../../shared/components/header/header.component';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  products = signal<Product[]>([]);
  selectedProducts = signal<Product[]>([]);

  constructor(){
    const initProducts: Product[] = [
      {
        id: Date.now(),
        title: 'Product 1',
        price: 100,
        image: 'https://picsum.photos/640/640?r=23'
      },
      {
        id: Date.now(),
        title: 'Product 2',
        price: 300,
        image: 'https://picsum.photos/640/640?r=28'
      },
      {
        id: Date.now(),
        title: 'Product 3',
        price: 80,
        image: 'https://picsum.photos/640/640?r=77'
      },
      {
        id: Date.now(),
        title: 'Product 4',
        price: 70,
        image: 'https://picsum.photos/640/640?r=88'
      },
      {
        id: Date.now(),
        title: 'Product 5',
        price: 160,
        image: 'https://picsum.photos/640/640?r=35'
      },
      {
        id: Date.now(),
        title: 'Product 6',
        price: 58,
        image: 'https://picsum.photos/640/640?r=55'
      }
    ];
    this.products.set(initProducts);
  };


  addToCart(product: Product){
    this.selectedProducts.update((prevState) => [...prevState, product]);
  };

}
