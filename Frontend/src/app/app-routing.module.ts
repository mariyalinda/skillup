import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddquestionComponent } from './addquestion/addquestion.component';
import { AuthGuard } from './auth.guard';

import { EngComponent } from './eng/eng.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MathComponent } from './math/math.component';
import { ProfileComponent } from './profile/profile.component';
import { ScienceComponent } from './science/science.component';
import { SdashComponent } from './sdash/sdash.component';
import { SignupComponent } from './signup/signup.component';
import { SsComponent } from './ss/ss.component';
import { TdashComponent } from './tdash/tdash.component';
import { TopicsComponent } from './topics/topics.component';

import { VarkComponent } from './vark/vark.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'vark', component: VarkComponent },
  {
    path: 'sdash',
    canActivate: [AuthGuard],
    component: SdashComponent,
    children: [
      {
        path: 'profile',
        canActivate: [AuthGuard],
        component: ProfileComponent,
      },
      {
        path: 'topics',
        canActivate: [AuthGuard],
        component: TopicsComponent,
      },
    ],
  },

  {
    path: 'tdash',

    component: TdashComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'addquestion', component: AddquestionComponent },
      { path: 'math', component: MathComponent },
      { path: 'science', component: ScienceComponent },
      { path: 'ss', component: SsComponent },
      { path: 'english', component: EngComponent },
      {
        path: 'profile',
        canActivate: [AuthGuard],
        component: ProfileComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
