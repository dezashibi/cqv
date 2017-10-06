import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionListComponent } from './questions/question-list/question-list.component';
import { QuestionComponent } from './questions/question-list/question.component';
import {QuestionService} from './services/question.service';
import { AdminComponent } from './admin/admin.component';
import {routes} from './app.routes';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AdminQuestionListComponent } from './admin/admin-question-list/admin-question-list.component';
import { AdminQuestionDeleteComponent } from './admin/admin-question-delete/admin-question-delete.component';
import { AdminUserCreateComponent } from './admin/admin-user-create/admin-user-create.component';
import {UserService} from "./services/user.service";
import { AdminUserListComponent } from './admin/admin-user-list/admin-user-list.component';
import {AuthService} from "./services/auth.service";
import { LoginComponent } from './login/login.component';
import {AuthGuardService} from "./services/auth-guard.service";
import { LogoutComponent } from './logout/logout.component';
import {AuthModule} from "./modules/auth.module";
import { AdminQuestionAnsweredComponent } from './admin/admin-question-answered/admin-question-answered.component';
import { AdminUserDeleteComponent } from './admin/admin-user-delete/admin-user-delete.component';

@NgModule({
  declarations: [
      AppComponent,
      NavbarComponent,
      QuestionsComponent,
      QuestionListComponent,
      QuestionComponent,
      AdminComponent,
      AdminQuestionListComponent,
      AdminQuestionDeleteComponent,
      AdminUserCreateComponent,
      AdminUserListComponent,
      LoginComponent,
      LogoutComponent,
      AdminQuestionAnsweredComponent,
      AdminUserDeleteComponent
  ],
  imports: [
      ReactiveFormsModule,
      routes,
      BrowserModule,
      FormsModule,
      HttpModule,
      AuthModule
  ],
  providers: [QuestionService, UserService, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
