import { Routes, RouterModule } from '@angular/router';
import { AlbumsComponent } from "./albums/albums.component";
import { PhotosComponent } from "./photos/photos.component";
// Route config let's you map routes to components

export const router: Routes = [
    { path: 'albums', component: AlbumsComponent },
    { path:'photos',component:PhotosComponent}
];

export const appRouterModule = RouterModule.forRoot(router);