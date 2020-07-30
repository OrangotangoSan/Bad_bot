import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HomeComponent } from './comeco/home/home.component';
import { NavComponent } from './comeco/nav/nav.component';
import { FooterComponent } from './comeco/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RatingTemplateComponent } from './rating-template/rating-template.component';
import { FormComponent } from './comeco/form/form.component';
import { CommentComponent } from './comeco/comment/comment.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    RatingTemplateComponent,
    FormComponent,
    CommentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
