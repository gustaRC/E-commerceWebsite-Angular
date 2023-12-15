import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductsListService } from '../../services/products-list.service';
import { ProductsType } from '../../interface/products-type';
import { titleCase } from "title-case";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  listProducts: Array<ProductsType> = []

  listSearch: Array<ProductsType> = []

  constructor(private productsListService: ProductsListService) { }

  ngOnInit(): void {

    this.productsListService.getList().subscribe(
      res => {
        this.listProducts = res
        this.listSearch = this.listProducts
      },
      err => err
    )

  }

  search(v: string) {


    let vM = titleCase(v.toLowerCase())

    let filter = this.listProducts.filter( el =>  {
      return !el.title.indexOf(vM)
    })

    this.listSearch = filter
  }

}
