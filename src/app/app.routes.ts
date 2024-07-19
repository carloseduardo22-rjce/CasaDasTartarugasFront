import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout-component';
import { HomeComponent } from './home/home.component';
import { RoomComponent } from './room/room.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: '/home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'quartos', component: RoomComponent },
        ],
    },
    { path: 'login', component: LoginComponent }
];
