import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';

import { EngComponent } from './eng/eng.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MathComponent } from './math/math.component';
import { ScienceComponent } from './science/science.component';
import { SdashComponent } from './sdash/sdash.component';
import { SignupComponent } from './signup/signup.component';
import { SsComponent } from './ss/ss.component';
import { TdashComponent } from './tdash/tdash.component';
import { TsubComponent } from './tsub/tsub.component';
import { VarkComponent } from './vark/vark.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'vark', canActivate: [AuthGuard], component: VarkComponent },
  { path: 'tsub', canActivate: [AuthGuard], component: TsubComponent },
  { path: 'tdash', canActivate: [AuthGuard], component: TdashComponent },
  {
    path: 'sdash',
    canActivate: [AuthGuard],
    component: SdashComponent,
    children: [
      { path: 'math', component: MathComponent },
      { path: 'science', component: ScienceComponent },
      { path: 'ss', component: SsComponent },
      { path: 'english', component: EngComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
