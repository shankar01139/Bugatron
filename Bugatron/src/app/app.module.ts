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
    IssueAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
