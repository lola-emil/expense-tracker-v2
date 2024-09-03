import { Routes } from '@angular/router';
import { HomePageComponent } from './views/home-page/home-page.component';
import { SigninPageComponent } from './views/signin-page/signin-page.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path: "",
        component: HomePageComponent
    },
    {
        path: "signin",
        component: SigninPageComponent
    },
    

    // Page Not Found
    {
        path: "**",
        component: PageNotFoundComponent
    }
];
