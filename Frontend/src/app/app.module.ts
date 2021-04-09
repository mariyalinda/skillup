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
import { TopicsComponent } from './topics/topics.component';
import { AuthService } from './auth.service';
import { MathService } from './math.service';
import { ScienceService } from './science.service';
import { EnglishService } from './english.service';
import { SsService } from './ss.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { VarkComponent } from './vark/vark.component';
import { TsubComponent } from './tsub/tsub.component';
import { TdashComponent } from './tdash/tdash.component';
import { NavteacherComponent } from './navteacher/navteacher.component';

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
    TopicsComponent,
    VarkComponent,
    TsubComponent,
    TdashComponent,
    NavteacherComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    AuthService,
    MathService,
    SsService,
    ScienceService,
    EnglishService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
