import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { MarksComponent } from './marks/marks.component';
import { PlacementsComponent } from './placements/placements.component';

const routes: Routes = [
  {path:"feedback",component:FeedbackComponent},
  {path:"courses",component:CoursesComponent},
  {path:"marks",component:MarksComponent},
  {path:"placements",component:PlacementsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
