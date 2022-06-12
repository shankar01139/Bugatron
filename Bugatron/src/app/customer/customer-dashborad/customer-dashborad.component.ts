import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { CompanyInfoService } from 'src/app/shared/service/company-info.service';
import { CustomerInfoService } from 'src/app/shared/service/customer-info.service';
import { IssueInfoService } from 'src/app/shared/service/issue-info.service';
import { ProjectInfoService } from 'src/app/shared/service/project-info.service';

@Component({
  selector: 'app-customer-dashborad',
  templateUrl: './customer-dashborad.component.html',
  styleUrls: ['./customer-dashborad.component.css'],
})
export class CustomerDashboradComponent implements OnInit {
  issueCount: any = [];
  issueList: any = [];
  constructor(
    private issueService: IssueInfoService,
    private projectService: ProjectInfoService,
    private customerService: CustomerInfoService,
    private companyService: CompanyInfoService,
    private datepipe: DatePipe
  ) {
    ($(document) as any).ready(() => {
      let arr = ['0', '5', '10', '15', '20', '25'];

      this.issueService
        .getAll(sessionStorage.getItem('userId'))
        .subscribe((res) => {
          for (let i of res) {
            this.issueList.push(i);
            if (i.issue_status != 'R') {
              this.count.issues += 1;
            }
            if (i.issue_status == 'O') {
              this.issues.open += 1;
            }
            if (i.issue_status == 'RE') {
              this.issues.ReOpened += 1;
            }
            if (i.issue_status == 'C') {
              this.issues.Closed += 1;
            }
            if (i.issue_status == 'R') {
              this.issues.Resolved += 1;
            }
          }
        });
      this.issueService
        .getResolved(sessionStorage.getItem('userId'))
        .subscribe((res) => {
          for (let i of res) {
            this.issueList.push(i);
            if (i.issue_status != 'R') {
              this.count.issues += 1;
            }
            if (i.issue_status == 'O') {
              this.issues.open += 1;
            }
            if (i.issue_status == 'RE') {
              this.issues.ReOpened += 1;
            }
            if (i.issue_status == 'C') {
              this.issues.Closed += 1;
            }
            if (i.issue_status == 'R') {
              this.issues.Resolved += 1;
            }
          }
        });
      this.issueService
        .getUnassigned(sessionStorage.getItem('userId'))
        .subscribe((res) => {
          debugger
          console.log(this.issues.ReOpened)
          for (let i of res) {
            this.issueList.push(i);
            if (i.issue_status != 'R') {
              this.count.issues += 1;
            }
            if (i.issue_status == 'O') {
              this.issues.open += 1;
            }
            if (i.issue_status == 'RE') {
              this.issues.ReOpened += 1;
            }
            if (i.issue_status == 'C') {
              this.issues.Closed += 1;
            }
            if (i.issue_status == 'R') {
              this.issues.Resolved += 1;
            }
          }
          console.log(this.issues);
          var SalesChartCanvas = ($('#salesBarchart') as any)
            .get(0)
            .getContext('2d'); //issue char bar
          var SalesChart = new Chart(SalesChartCanvas, {
            type: 'bar',
            data: {
              labels: [
                this.datepipe.transform(
                  this.today,
                  'MMM d, YYYY',
                  'en-US'
                ) as any,
              ],
              datasets: [
                {
                  label: "New Issues",
                  data: [this.issues?.open],
                  backgroundColor: '#98BDFF',
                },
                {
                  label: 'Reopened Issues',
                  data: [this.issues?.ReOpened],
                  backgroundColor: '#4B49AC',
                },
                {
                  label: 'Closed Issues',
                  data: [this.issues?.Closed],
                  backgroundColor: '#F3797E',
                },
                {
                  label: 'Resolved Issues',
                  data: [this.issues?.Resolved],
                  backgroundColor: '#6c757d',
                },
              ],
            },
            options: {
              responsive: true,
              maintainAspectRatio: true,
              layout: {
                padding: {
                  left: 0,
                  right: 0,
                  top: 20,
                  bottom: 0,
                },
              },
            },
          }); // end issue chart
        });

      this.issueService
        .getCustIssueCount(
          this.datepipe.transform(
            new Date().setDate(this.today.getDate() - 4),
            'yyyy-MM-dd'
          ) as any,
          sessionStorage.getItem('userId')
        )
        .subscribe((res) => {
          console.log(res);
          this.issueCount.push(res);
        });
      this.issueService
      .getCustIssueCount(
        this.datepipe.transform(
          new Date().setDate(this.today.getDate() - 3),
          'yyyy-MM-dd'
        ) as any,
        sessionStorage.getItem('userId')
      )
        .subscribe((res) => {
          console.log(res);
          this.issueCount.push(res);
        });
      this.issueService
      .getCustIssueCount(
        this.datepipe.transform(
          new Date().setDate(this.today.getDate() - 2),
          'yyyy-MM-dd'
        ) as any,
        sessionStorage.getItem('userId')
      )
        .subscribe((res) => {
          console.log(res);
          this.issueCount.push(res);
        });
      this.issueService
      .getCustIssueCount(
        this.datepipe.transform(
          new Date().setDate(this.today.getDate() - 1),
          'yyyy-MM-dd'
        ) as any,
        sessionStorage.getItem('userId')
      )
        .subscribe((res) => {
          console.log(res);
          this.issueCount.push(res);
        });
      this.issueService
        .getCustIssueCount(this.datepipe.transform(this.today, 'yyyy-MM-dd') as any,sessionStorage.getItem('userId'))
        .subscribe((res) => {
          console.log(res);
          this.issueCount.push(res);
        });
      this.issueCount.concat(arr);
      var areaData = {};
      var revenueChartCanvas = ($('#order-chart') as any)
        .get(0)
        .getContext('2d');
      var revenueChart = new Chart(revenueChartCanvas, {
        type: 'line',
        data: {
          labels: [
            this.datepipe.transform(
              new Date().setDate(this.today.getDate() - 4),
              'MMM d',
              'en-US'
            ) as any,
            this.datepipe.transform(
              new Date().setDate(this.today.getDate() - 3),
              'MMM d',
              'en-US'
            ) as any,
            this.datepipe.transform(
              new Date().setDate(this.today.getDate() - 2),
              'MMM d',
              'en-US'
            ) as any,
            this.datepipe.transform(
              new Date().setDate(this.today.getDate() - 1),
              'MMM d',
              'en-US'
            ) as any,
            this.datepipe.transform(this.today, 'MMM d', 'en-US') as any,
          ],
          datasets: [
            {
              data: this.issueCount,
              borderColor: '#4747A1',
              borderWidth: 2,
              fill: false,
              label: 'Issues',
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 20,
              bottom: 0,
            },
          },
        },
      });
    });
  }
  count: any = {
    issues: 0,
    projects: 0,
    others: 0,
  };
  today = new Date();
  issues: any = {
    open: 0,
    ReOpened: 0,
    Resolved: 0,
    Closed: 0,
  };
  userCompany: any;
  currentUser: any;
  ngOnInit(): void {
    this.currentUser = sessionStorage.getItem('currentuser');
    this.customerService
      .get(sessionStorage.getItem('userId'))
      .subscribe((res) => {
        this.userCompany = res.company_name;
        console.log(this.userCompany);
        this.projectService.getByCompany(this.userCompany).subscribe((res) => {
          console.log(res);
          this.count.others = res.length;
        });
      });
    this.getprojects();
  }

  getprojects() {
    this.projectService
      .getByCustomer(sessionStorage.getItem('userId'))
      .subscribe((res) => {
        console.log(res);
        this.count.projects = res.length;
      });
  }
  getCount(date: any) {
    this.issueService.getIssueCount(date).subscribe((res) => {
      console.log(res);
      this.issueCount.push(res);
    });
  }
}
