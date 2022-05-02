import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { AdminboardComponent } from './admin/adminboard/adminboard.component';
import { SidenavComponent } from './navbar/sidenav/sidenav.component';
import { TopnavComponent } from './navbar/topnav/topnav.component';
import { RightnavComponent } from './navbar/rightnav/rightnav.component';
import { DeveloperComponent } from './admin/developer/developer.component';
import { DevDetailsComponent } from './admin/developer/dev-details/dev-details.component';
import { CustomerComponent } from './admin/customer/customer.component';
import { CustomerDetailsComponent } from './admin/customer/customer-details/customer-details.component';
import { ProjectComponent } from './admin/project/project.component';
import { ProjectReportComponent } from './admin/project/project-report/project-report.component';
import { IssueComponent } from './admin/issue/issue.component';
import { IssueReportComponent } from './admin/issue/issue-report/issue-report.component';
import * as $ from 'jquery';
import { CustomerAddComponent } from './admin/customer/customer-add/customer-add.component';
import { DeveloperAddComponent } from './admin/developer/developer-add/developer-add.component';
import { ProjectAddComponent } from './admin/project/project-add/project-add.component';
import { IssueAddComponent } from './admin/issue/issue-add/issue-add.component';
import { CompanyComponent } from './company/company.component';
import { CompanyAddComponent } from './company/company-add/company-add.component';
import { CustomerDashboradComponent } from './customer/customer-dashborad/customer-dashborad.component';
import { IssuesReportComponent } from './customer/issues-report/issues-report.component';
import { IssuesAddComponent } from './customer/issues-add/issues-add.component';
import { DeveloperDashboradComponent } from './developer/developer-dashborad/developer-dashborad.component';
import { TaskComponent } from './developer/task/task.component';
import { AddActionComponent } from './developer/add-action/add-action.component';
import { DatePipe } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    AdminboardComponent,
    SidenavComponent,
    TopnavComponent,
    RightnavComponent,
    DeveloperComponent,
    DevDetailsComponent,
    CustomerComponent,
    CustomerDetailsComponent,
    ProjectComponent,
    ProjectReportComponent,
    IssueComponent,
    IssueReportComponent,
    CustomerAddComponent,
    DeveloperAddComponent,
    ProjectAddComponent,
    IssueAddComponent,
    CompanyComponent,
    CompanyAddComponent,
    CustomerDashboradComponent,
    IssuesReportComponent,
    IssuesAddComponent,
    DeveloperDashboradComponent,
    TaskComponent,
    AddActionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
