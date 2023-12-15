import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { ProductsListService } from '../../services/products-list.service';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Output() outputFilter = new EventEmitter()

  boleano: boolean = false

  filterForm = new FormGroup({
    priceLimit: new FormControl(''),
    categories: new FormControl(''),
  })

  separateCategories: Array<string> = []

  constructor(private productsListService: ProductsListService) { }

  ngOnInit(): void {

    this.productsListService.getList().subscribe(
      res => {
        res.forEach((element: any) => {
          if (!this.separateCategories.find(el => el === element.category)) {

            this.separateCategories.push(element.category)

          }
        });
      },
      err => err
      )

  }

  applyFilter() {
    this.outputFilter.emit(this.filterForm.value)
  }

}
