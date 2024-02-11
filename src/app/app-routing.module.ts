import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ClientinfoComponent } from './clientinfo/clientinfo.component';
import { ProjectsinfoComponent } from './projectsinfo/projectsinfo.component';
import { OneclientComponent } from './oneclient/oneclient.component';
import { ModifyclientComponent } from './modifyclient/modifyclient.component';
import { ModifyprojectComponent } from './modifyproject/modifyproject.component';
import { ViewtaskComponent } from './viewtask/viewtask.component';
import { ModifytaskComponent } from './modifytask/modifytask.component';
import { ProjecttaskComponent } from './projecttask/projecttask.component';
import { MeetinginfoComponent } from './meetinginfo/meetinginfo.component';
import { TaskinfoComponent } from './taskinfo/taskinfo.component';
import { ViewmeetingComponent } from './viewmeeting/viewmeeting.component';
import { ModifymeetingComponent } from './modifymeeting/modifymeeting.component';
import { hrguardGuard } from './hrguard.guard';
import { clientguardGuard } from './clientguard.guard';
import { DashboardprojectinfoComponent } from './dashboardprojectinfo/dashboardprojectinfo.component';
import { DashboardclientComponent } from './dashboardclient/dashboardclient.component';

const routes: Routes = [

{path:"",component:WelcomeComponent},
{path:"welcome",component:WelcomeComponent,canActivate:[clientguardGuard]},
{path:"login",component:LoginComponent},
{path:"home",component:HomeComponent,canActivate:[hrguardGuard]},
{path:"clientinfo",component:ClientinfoComponent,canActivate:[hrguardGuard]},
{path:"projectsinfo",component:ProjectsinfoComponent,canActivate:[hrguardGuard]},
{path:"oneclient/:id",component:OneclientComponent,canActivate:[hrguardGuard]},
{path:"modifyclient/:id",component:ModifyclientComponent,canActivate:[hrguardGuard]},
{path:"modifyproject/:id",component:ModifyprojectComponent,canActivate:[hrguardGuard]},
{path:"viewtask/:id",component:ViewtaskComponent,canActivate:[hrguardGuard]},
{path:"modifytask/:id",component:ModifytaskComponent,canActivate:[hrguardGuard]},
{path:"projecttask",component:ProjecttaskComponent,canActivate:[hrguardGuard]},
{path:"meetinginfo",component:MeetinginfoComponent,canActivate:[hrguardGuard]},
{path:"taskinfo/:projectId",component:TaskinfoComponent,canActivate:[hrguardGuard]},
{path:"viewmeeting/:id",component:ViewmeetingComponent,canActivate:[hrguardGuard]},
{path:"modifymeeting/:id",component:ModifymeetingComponent,canActivate:[hrguardGuard]},
{path:"dprojectinfo",component:DashboardprojectinfoComponent,canActivate:[clientguardGuard]},
{path:"dclient",component:DashboardclientComponent,canActivate:[clientguardGuard]}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
