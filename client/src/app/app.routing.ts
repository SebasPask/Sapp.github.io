import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import user
import { UserEditComponent } from './components/user-edit.component';
// import artist
import { ArtistListComponent } from './components/artist-list.component';
const apppRoutes: Routes = [
  {path:'', component: ArtistListComponent},
  {path:'artist/:page',component: ArtistListComponent},
  {path:'mis-datos', component: UserEditComponent},
  {path:'**', component: ArtistListComponent}
];
export const appRoutingProviders: any[] =[];
export const routing: ModuleWithProviders = RouterModule.forRoot(apppRoutes);
