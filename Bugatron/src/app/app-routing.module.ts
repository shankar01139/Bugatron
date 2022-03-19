import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminboardComponent } from './admin/adminboard/adminboard.component';
import { CustomerDetailsComponent } from './admin/customer/customer-details/customer-details.component';
import { CustomerComponent } from './admin/customer/customer.component';
import { DevDetailsComponent } from './admin/developer/dev-details/dev-details.component';
import { DeveloperComponent } from './admin/developer/developer.component';
import { IssueReportComponent } from './admin/issue/issue-report/issue-report.component';
import { IssueComponent } from './admin/issue/issue.component';
import { ProjectReportComponent } from './admin/project/project-report/project-report.component';
import { ProjectComponent } from './admin/project/project.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'admin/dashboard', component: AdminboardComponent },
  { path: 'admin/developer', component: DeveloperComponent },
  { path: 'admin/developer/analysis', component: DevDetailsComponent },
  { path: 'admin/customer', component: CustomerComponent },
  { path: 'admin/customer/analysis', component: CustomerDetailsComponent },
  { path: 'admin/project', component: ProjectComponent },
  { path: 'admin/project/report', component: ProjectReportComponent },
  { path:'admin/issue',component:IssueComponent},
  { path:'admin/issue/report',component:IssueReportComponent},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
