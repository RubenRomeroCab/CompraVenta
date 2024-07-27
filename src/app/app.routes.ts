import { Routes } from '@angular/router';
import { PaleDetailsComponent } from './components/pale-details/pale-details.component';
import { BodyComponent } from './components/body/body.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
    {path: '', redirectTo: '/body', pathMatch: 'full' },
    {path:'home',component:HomeComponent},
    {path:'body',component:BodyComponent},
    {path:'pale-details',component:PaleDetailsComponent},
    {path:'about',component:AboutComponent}
];
