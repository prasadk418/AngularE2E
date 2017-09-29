import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './dashboard/dashboard.component';
import { RegisteredUsersComponent } from './registeredusers/registeredusers.component';
import { OrderDetailsComponent } from './orderdetails/orderdetails.component';
import { OrderHistoryComponent } from './orderhistory/orderhistory.component';

export const AdminRoutes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children:[
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                component: AdminDashboardComponent
            },
            {
                path: 'registeredusers',
                component: RegisteredUsersComponent
            },
            {
                path: 'orderdetails',
                component: OrderDetailsComponent
            },
            {
                path: 'orderhistory',
                component: OrderHistoryComponent
            }
        ]
        
    }
    
]

export const AdminRouting = RouterModule.forChild(AdminRoutes);