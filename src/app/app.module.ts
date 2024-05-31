import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

//COMPONENTS
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { CardsComponent } from './shared/components/cards/cards.component';

//PIPE
import { LimitLengthTextPipe } from './shared/pipes/limit-length-text.pipe';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchComponent } from './shared/components/search/search.component';
import { FilterComponent } from './shared/components/filter/filter.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//PrimeNG
import {AccordionModule} from 'primeng/accordion';
import {SliderModule} from 'primeng/slider';
import { InputTextModule } from 'primeng/inputtext';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { LoadingComponent } from './shared/components/loading/loading.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    CardsComponent,
    LimitLengthTextPipe,
    HomePageComponent,
    SearchComponent,
    FilterComponent,
    CategoryPageComponent,
    LoadingComponent,
    ProductsPageComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AccordionModule,
    SliderModule,
    FormsModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
