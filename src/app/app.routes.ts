import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'todo',
    loadChildren: () => import('mfe2/todo.module').then((m)=> m.TodoModule),

  },

];