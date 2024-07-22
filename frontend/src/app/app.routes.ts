import { Routes } from '@angular/router';
import { HomePageComponent } from './views/home-page/home-page.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { SignInPageComponent } from './views/sign-in-page/sign-in-page.component';
import { DashboardPageComponent } from './views/dashboard-page/dashboard-page.component';

export const routes: Routes = [
    {
        path: "",
        component: HomePageComponent
    },
    {
        path: "signin",
        component: SignInPageComponent
    },
    {
        path: "dashboard",
        component: DashboardPageComponent
    },
    {
        path: "**",
        component: PageNotFoundComponent
    }
];
