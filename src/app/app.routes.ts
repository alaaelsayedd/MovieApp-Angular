import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { TvListComponent } from './components/tv-list/tv-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MovieDetilsComponent } from './components/movie-detils/movie-detils.component';
import { SearchComponent } from './components/search/search.component';


import { TvDetailsComponent } from './components/tv-details/tv-details.component';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'movies',component:MovieListComponent},
    {path:'movdetails/:id',component:MovieDetilsComponent},
    {path:'tvdetails/:id',component:TvDetailsComponent},
    {path:'about',component:AboutUsComponent},
    {path:'contact',component:ContactUsComponent},
    {path:'tv',component:TvListComponent},
    {path:'search',component:SearchComponent},
    {path:'**',component:PageNotFoundComponent},
];
