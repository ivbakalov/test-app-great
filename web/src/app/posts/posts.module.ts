import { SinglePostModule } from './single-post/single-post.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { PostsRoutingModule } from './posts.routing.module';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [PostsComponent],
  imports: [CommonModule, SinglePostModule, PostsRoutingModule, MatPaginatorModule],
  exports: [PostsComponent],
})
export class PostsModule {}
