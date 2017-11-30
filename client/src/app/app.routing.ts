import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import user
import { UserEditComponent } from './components/user-edit.component';
// import artist
import { ArtistListComponent } from './components/artist-list.component';
import { ArtistAddComponent } from './components/artist-add.component';
import { HomeComponent } from './components/home.component';
const apppRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'artist/:page',component: ArtistListComponent},
  {path: 'artistas/:page', component: ArtistListComponent},
  {path: 'create-artist', component: ArtistAddComponent},
  {path:'mis-datos', component: UserEditComponent},
  {path: '**', component: HomeComponent}
];
export const appRoutingProviders: any[] =[];
export const routing: ModuleWithProviders = RouterModule.forRoot(apppRoutes);
