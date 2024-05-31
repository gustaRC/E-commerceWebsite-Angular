import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductsType } from 'src/app/shared/interface/products-type';
import { ProductsListService } from 'src/app/shared/services/products-list.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit, OnDestroy {

  selectedProduct!: ProductsType

  inscricao!: Subscription

  constructor(
    private route: ActivatedRoute,
    private productsListService: ProductsListService
    ) { }

  ngOnInit(): void {

    this.inscricao = this.route.params.subscribe( (param: any) => {
      this.productsListService.getId(param['id']).subscribe(
        res => {
          this.selectedProduct = res

        },
        err => err
        )
      })

  }




  ngOnDestroy(): void {
    this.inscricao.unsubscribe
  }

}
