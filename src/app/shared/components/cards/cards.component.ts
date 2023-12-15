import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductsListService } from '../../services/products-list.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit, OnChanges {

  listProducts: Array<any> = []
  listProductsBackup: Array<any> = []

  @Input() inputQtdeCards!: number

  @Input() inputFilter!: any

  constructor(private productsListService: ProductsListService) { }

  ngOnInit(): void {

    this.productsListService.getList().subscribe(
      res => {
          res.forEach(el => {
            if (this.listProducts.length < this.inputQtdeCards) {
              this.listProductsBackup.push(el)

            } else if (!this.inputQtdeCards) {        
              this.listProductsBackup = res

            }
            this.listProducts = this.listProductsBackup
          })
      },
      err => err
    )
  }


  ngOnChanges(): void {

    this.filterManipulation()

  }

  filterManipulation() {
    //RESET
    this.listProducts = this.listProductsBackup

    //FILTER - PRICE LIMIT
    if (this.inputFilter?.priceLimit == '100') {
      this.filterPriceLimit(this.inputFilter.priceLimit)

    } else if(this.inputFilter?.priceLimit == '500') {
      this.filterPriceLimit(this.inputFilter.priceLimit)

    }

    //FILTER - CATEGORIES
    this.filterCategories(this.inputFilter?.categories)
  }

  filterPriceLimit(v: string | number) {
    //FILTER - PRICE LIMIT
    this.listProducts = this.listProductsBackup.filter( (el: any) => el.price <  Number(v))
  }

  filterCategories(v: string) {
    //FILTER - CATEGORIES
    if (this.inputFilter?.categories != '') {
      this.listProducts = this.listProducts.filter( (el: any) => el.category ==  v)

    }
  }

}
