import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { SdashComponent } from './sdash/sdash.component';
import { NavloginComponent } from './navlogin/navlogin.component';
import { MathComponent } from './math/math.component';
import { ScienceComponent } from './science/science.component';
import { SsComponent } from './ss/ss.component';
import { EngComponent } from './eng/eng.component';

import { AuthService } from './auth.service';
import { MathService } from './math.service';
import { ScienceService } from './science.service';
import { EnglishService } from './english.service';
import { SsService } from './ss.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { VarkComponent } from './vark/vark.component';

import { TdashComponent } from './tdash/tdash.component';
import { NavteacherComponent } from './navteacher/navteacher.component';
import { AddquestionComponent } from './addquestion/addquestion.component';

import { QuestionService } from './question.service';
import { ProfileComponent } from './profile/profile.component';
import { UserService } from './user.service';
import { TopicsComponent } from './topics/topics.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    SdashComponent,
    NavloginComponent,
    MathComponent,
    ScienceComponent,
    SsComponent,
    EngComponent,

    VarkComponent,

    TdashComponent,
    NavteacherComponent,
    AddquestionComponent,
    ProfileComponent,
    TopicsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    AuthService,
    MathService,
    SsService,
    ScienceService,
    EnglishService,
    UserService,
    QuestionService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
