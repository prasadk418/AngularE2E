import { Routes, RouterModule } from '@angular/router';

const AppRoutes:Routes = [
    {
        path: '',
        redirectTo: 'prelogin',
        pathMatch: 'full'
    },
    {
        path: 'prelogin',
        loadChildren:'app/priorlogin/priorlogin.module#PriorLoginModule'
    },
    {
        path: 'admin',
        loadChildren:'app/admin/admin.module#AdminModule'
    },
    {
        path: 'builder',
        loadChildren:'app/builder/builder.module#BuilderModule'
    }
    // ,
    // {
    //     path: 'vendor',
    //     loadChildren:'app/builder/builder.module#BuilderModule'
    // }

]

export const AppRouting = RouterModule.forRoot(AppRoutes,{useHash:true});