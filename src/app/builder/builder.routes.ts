import { Routes, RouterModule } from '@angular/router';
import { BuilderComponent } from './builder.component';
import { NewOrdersComponent } from './neworders/neworders.component';
import { OrdersOnHoldComponent } from './ordersonhold/ordersonhold.component';
import { OrderHistoryComponent } from './orderhistory/orderhistory.component';

export const BuilderRoutes: Routes = [
    {
        path: '',
        component: BuilderComponent,
        children:[
            {
                path: '',
                redirectTo: 'neworders',
                pathMatch: 'full'
            },
            {
                path: 'neworders',
                component: NewOrdersComponent
            },
            {
                path: 'ordersonhold',
                component: OrdersOnHoldComponent
            },
            {
                path: 'orderhistory',
                component: OrderHistoryComponent
            }
        ]
        
    }
    
]

export const BuilderRouting = RouterModule.forChild(BuilderRoutes);