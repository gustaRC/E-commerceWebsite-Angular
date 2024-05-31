import { Component, OnDestroy, OnInit, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, filter } from 'rxjs';
import { FilterType } from 'src/app/shared/interface/filter-type';
import { ProductsListService } from 'src/app/shared/services/products-list.service';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit, OnDestroy {

  inscricao!: Subscription

  categoryTxt!: string

  bannerIMG!: string

  filterSelected!: FilterType

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this.processingAPICategory()

  }

  processingAPICategory() {
    this.inscricao = this.route.params.subscribe( (param: any) => {

      this.filterSelected = {priceLimit: '', categories: param['category']}


      this.categoryTxt = param['category']
      this.bannerIMG = `/assets/banners/${param['category']}.png`

    })
  }


  ngOnDestroy(): void {
    this.inscricao.unsubscribe

  }

}
