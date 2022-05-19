import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './components/album/album.component';
import { ArtistDetailsComponent } from './components/artist-details/artist-details.component';
import { ArtistComponent } from './components/artist/artist.component';

const routes: Routes = [
  { path: '', component: ArtistComponent, pathMatch: 'full' },
  { path: 'artist/:id', component: ArtistDetailsComponent, pathMatch: 'full' },
  { path: 'album/:id', component: AlbumComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
