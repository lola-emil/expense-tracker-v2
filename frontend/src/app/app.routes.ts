import { Routes } from '@angular/router';
import { HomePageComponent } from './views/home-page/home-page.component';
import { SigninPageComponent } from './views/signin-page/signin-page.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { ExpenseListComponent } from './views/expense-list/expense-list.component';
import { ExpenseDetailComponent } from './views/expense-detail/expense-detail.component';
import { ProfileSettingComponent } from './views/profile-setting/profile-setting.component';
import { GeneralSettingComponent } from './views/general-setting/general-setting.component';

export const routes: Routes = [
    {
        path: "",
        component: HomePageComponent
    },

    {
        path: "expenses",
        component: ExpenseListComponent
    },

    {
        path: "expenses/:id",
        component: ExpenseDetailComponent
    },

    {
        path: "profile",
        component: ProfileSettingComponent
    },

    {
      path: "settings",
      component: GeneralSettingComponent
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
