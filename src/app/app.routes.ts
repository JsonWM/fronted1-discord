import { Routes } from '@angular/router';
import { HomePageComponent } from './store-front/pages/home-page/home-page.component';
import { CategoriesPageComponent } from './store-front/pages/categories-page/categories-page.component';
import { CategoryPageComponent } from './store-front/pages/category-page/category-page.component';

export const routes: Routes = [

    {
        path:'',
        component:HomePageComponent
    },
    {
        path:'categories',
        component:CategoriesPageComponent
    },
    {
        path:'category/:id',
        component:CategoryPageComponent
    },
    {
        path:"**",
        redirectTo:'',
        
    }
];
