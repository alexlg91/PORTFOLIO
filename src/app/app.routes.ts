import { Routes } from '@angular/router';
import { HomePage } from './components/home-page/home-page.html';
import { ProjectPage } from './components/home-page/home-page.html';
import { PeriPage } from './components/home-page/home-page.html';
import { ScolairePage } from './components/home-page/home-page.html';
import { ExpPage } from './components/home-page/home-page.html';

export const routes: Routes = [
    {
        path:'Home',
        component: HomePage
    },
    {
        path:'Projects',
        component: ProjectPage
    },
    {
        path:'Péri-Scolaire',
        component: PeriPage
    },
    {
        path:'Scolaire',
        component: ScolairePage
    },
    {
        path:'Experience-Professionelle',
        component: ExpPage
    },
    {
        path:'**',
        component: HomePage
    },
];
