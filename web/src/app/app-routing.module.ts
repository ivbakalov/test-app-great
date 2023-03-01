import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: (): Promise<any> => import('@great-web/app/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'posts',
    loadChildren: (): Promise<any> => import('@great-web/app/posts/posts.module').then((m) => m.PostsModule),
  },
  {
    path: 'gallery',
    loadChildren: (): Promise<any> => import('@great-web/app/gallery/gallery.module').then((m) => m.GalleryModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
