import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {AdminComponent} from './admin/admin.component';
import {QuestionsComponent} from './questions/questions.component';
import {AdminQuestionListComponent} from './admin/admin-question-list/admin-question-list.component';
import {AdminQuestionDeleteComponent} from './admin/admin-question-delete/admin-question-delete.component';
import {AdminUserCreateComponent} from './admin/admin-user-create/admin-user-create.component';
import {AdminUserListComponent} from './admin/admin-user-list/admin-user-list.component';
import {LoginComponent} from './login/login.component';
import {AuthGuardService} from './services/auth-guard.service';
import {LogoutComponent} from './logout/logout.component';
import {AdminQuestionAnsweredComponent} from './admin/admin-question-answered/admin-question-answered.component';
import {AdminUserDeleteComponent} from './admin/admin-user-delete/admin-user-delete.component';

const appRoutes: Routes = [
    { path: '', component: QuestionsComponent},
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent},
    { path: 'admin', component: AdminComponent, canActivate: [AuthGuardService] },
    { path: 'admin/questions', component: AdminQuestionListComponent, canActivate: [AuthGuardService] },
    { path: 'admin/questions/delete/:id', component: AdminQuestionDeleteComponent, canActivate: [AuthGuardService] },
    { path: 'admin/questions/answered/:id', component: AdminQuestionAnsweredComponent, canActivate: [AuthGuardService] },
    { path: 'admin/users', component: AdminUserListComponent, canActivate: [AuthGuardService] },
    { path: 'admin/users/create', component: AdminUserCreateComponent, canActivate: [AuthGuardService] },
    { path: 'admin/users/delete/:id', component: AdminUserDeleteComponent, canActivate: [AuthGuardService] },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);
