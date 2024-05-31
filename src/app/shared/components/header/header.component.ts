import { Component, OnInit } from '@angular/core';
import { ProductsListService } from '../../services/products-list.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private productsListService: ProductsListService) { }

  separateCategories: Array<{ category: string, products: Array<any> }> = []

  ngOnInit(): void {

    //SEPARAR CATEGORIAS
    this.productsListService.getList().subscribe(
      res => {
        res.forEach((element: any) => {
          if (this.separateCategories.find(el => el.category === element.category)) {
            //ADD PRODUTOS
            this.separateCategories.forEach(el => {
              if (el.category === element.category) {
                el.products.push(element)
              }
            })

          } else {
            //CRIAR CATEGORIAS
            this.separateCategories.push({ category: element.category, products: [element] })
          }
        });
      },
      err => err
      )
      // console.log(this.separateCategories)
    }
}
