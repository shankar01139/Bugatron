import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminboardComponent } from './admin/adminboard/adminboard.component';
import { CustomerAddComponent } from './admin/customer/customer-add/customer-add.component';
import { CustomerComponent } from './admin/customer/customer.component';
import { DeveloperComponent } from './admin/developer/developer.component';
import { IssueReportComponent } from './admin/issue/issue-report/issue-report.component';
import { IssueComponent } from './admin/issue/issue.component';
import { ProjectReportComponent } from './admin/project/project-report/project-report.component';
import { ProjectComponent } from './admin/project/project.component';
import { DeveloperAddComponent } from './admin/developer/developer-add/developer-add.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
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
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'admin/dashboard', component: AdminboardComponent },
  { path: 'admin/developer', component: DeveloperComponent },
  { path: 'admin/developer/add', component: DeveloperAddComponent },
  { path: 'admin/developer/add/:id', component: DeveloperAddComponent },
  { path: 'admin/customer', component: CustomerComponent },
  { path: 'admin/customer/add', component: CustomerAddComponent },
  { path: 'admin/customer/add/:id', component: CustomerAddComponent },
  { path: 'admin/company', component: CompanyComponent },
  { path: 'admin/company/add', component: CompanyAddComponent },
  { path: 'admin/company/add/:id', component: CompanyAddComponent },
  { path: 'admin/project', component: ProjectComponent },
  { path: 'admin/project/add', component: ProjectAddComponent },
  { path: 'admin/project/add/:id', component: ProjectAddComponent },
  { path: 'admin/issue', component: IssueComponent },
  { path: 'admin/issue/add/:id', component: IssueAddComponent },
  { path: 'customer/dashboard', component: CustomerDashboradComponent },
  { path: 'customer/addIssue', component: IssuesAddComponent },
  { path: 'customer/addIssue/:id', component: IssuesAddComponent },
  { path: 'customer/issueReport', component: IssuesReportComponent },
  { path: 'developer/dashboard', component: DeveloperDashboradComponent },
  { path: 'developer/tasks', component: TaskComponent },
  { path: 'developer/tasks/action/:id', component: AddActionComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
