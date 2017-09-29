import { Routes, RouterModule } from '@angular/router';
import { PriorloginComponent } from './priorlogin.component';

import { WelcomeComponent } from './welcome/welcome.component';
import { ResetpwdComponent } from './resetpwd/resetpwd.component';
import { SetpwdComponent } from './setpwd/setpwd.component';
import { RegestrationComponent } from './regestration/regestration.component';

export const PriorLoginRoutes: Routes = [
    {
        path: '',
        component: PriorloginComponent,
        children:[
            {
                path: '',
                redirectTo: 'welcome',
                pathMatch: 'full'
            },
            {
                path: 'welcome',
                component: WelcomeComponent
            },
            {
                path: 'registration/:usertype',
                component: RegestrationComponent
            },
            {
                path: 'setpwd',
                component: SetpwdComponent
            },
            {
                path: 'resetpwd',
                component: ResetpwdComponent
            }
        ]
        
    }
    
]

export const PriorLoginRouting = RouterModule.forChild(PriorLoginRoutes);