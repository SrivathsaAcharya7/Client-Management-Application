import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgToastModule } from 'ng-angular-popup';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { ClientinfoComponent } from './clientinfo/clientinfo.component';
import { ProjectsinfoComponent } from './projectsinfo/projectsinfo.component';
import { RouterModule } from '@angular/router';

import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { OneclientComponent } from './oneclient/oneclient.component';
import { ModifyclientComponent } from './modifyclient/modifyclient.component';
import { DialogComponent } from './dialog/dialog.component';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { ModifyprojectComponent } from './modifyproject/modifyproject.component';
import { ProjecttaskComponent } from './projecttask/projecttask.component';
import { ModifytaskComponent } from './modifytask/modifytask.component';
import { ViewtaskComponent } from './viewtask/viewtask.component';
import { TaskdialogComponent } from './taskdialog/taskdialog.component';
import { MeetinginfoComponent } from './meetinginfo/meetinginfo.component';
import { MeetingdialogComponent } from './meetingdialog/meetingdialog.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ViewmeetingComponent } from './viewmeeting/viewmeeting.component';
import { ModifymeetingComponent } from './modifymeeting/modifymeeting.component';
import { CalendarModule } from 'primeng/calendar';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { TaskinfoComponent } from './taskinfo/taskinfo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardclientComponent } from './dashboardclient/dashboardclient.component';
import { DashboardprojectinfoComponent } from './dashboardprojectinfo/dashboardprojectinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    HomeComponent,
    ClientinfoComponent,
    ProjectsinfoComponent,
    OneclientComponent,
    ModifyclientComponent,
    DialogComponent,
    ModifyprojectComponent,
    ProjecttaskComponent,
    ModifytaskComponent,
    ViewtaskComponent,
    TaskdialogComponent,
    MeetinginfoComponent,
    MeetingdialogComponent,
    ViewmeetingComponent,
    ModifymeetingComponent,
    TaskinfoComponent,
    DashboardclientComponent,
    DashboardprojectinfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    NgbModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatIconModule,
    MatTableModule,
    FormsModule,
    HttpClientModule,
    NgToastModule,

    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    MatButtonModule,
    RouterModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CalendarModule,
    NgxMaterialTimepickerModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
