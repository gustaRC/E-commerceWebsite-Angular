import { Component, OnInit } from '@angular/core';
import { FilterType } from 'src/app/shared/interface/filter-type';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  filter!: FilterType

  constructor() { }

  ngOnInit(): void {
  }

  filterManipulation(value: any) {

    this.filter = value

  }

}
