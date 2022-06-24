import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ArticleComponent } from './article/article.component';
import { FooterComponent } from './footer/footer.component';
import { ManualComponent } from './manual/manual.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PlacementsComponent } from './placements/placements.component';
import { CoursesComponent } from './courses/courses.component';
import { ContactComponent } from './contact/contact.component';
import { ResultsComponent } from './results/results.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SquarePipe } from './square.pipe';
import { SquareORcubePipe } from './square-orcube.pipe';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { XyzComponent } from './xyz/xyz.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    ArticleComponent,
    FooterComponent,
    ManualComponent,
    HomeComponent,
    AboutComponent,
    PlacementsComponent,
    CoursesComponent,
    ContactComponent,
    ResultsComponent,
    LoginComponent,
    SquarePipe,
    SquareORcubePipe,
    RegisterComponent,
    XyzComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
