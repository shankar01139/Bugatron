import { Component, OnInit } from '@angular/core';
import { CompanyInfoService } from 'src/app/shared/service/company-info.service';
import { CustomerInfoService } from 'src/app/shared/service/customer-info.service';
import { IssueInfoService } from 'src/app/shared/service/issue-info.service';
import { ProjectInfoService } from 'src/app/shared/service/project-info.service';
import Chart from 'chart.js/auto';
import { DatePipe } from '@angular/common';
//export var Chart:any;
@Component({
  selector: 'app-adminboard',
  templateUrl: './adminboard.component.html',
  styleUrls: ['./adminboard.component.css'],
})
export class AdminboardComponent implements OnInit {
  constructor(
    private issueService: IssueInfoService,
    private projectService: ProjectInfoService,
    private customerService: CustomerInfoService,
    private companyService: CompanyInfoService,
    private datepipe: DatePipe
  ) {
    ($(document) as any).ready(() => {
      this.issueService.getAllIssue().subscribe((res) => {
        console.log(res);
        for (let i of res) {
          if (i.issue_status != 'R') {
            this.count.issues += 1;
          }
          if (i.issue_status == 'O') {
            this.issues.open += 1;
          }
          if (i.issue_status == 'RE') {
            this.issues.Reopened += 1;
          }
          if (i.issue_status == 'C') {
            this.issues.Closed += 1;
          }
          if (i.issue_status == 'R') {
            this.issues.Resolved += 1;
          }
        }
        console.log(this.issues);
        var SalesChartCanvas = ($('#barchart') as any).get(0).getContext('2d'); //issue char bar
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
                label: "Today's Issues",
                data: [this.issues?.open],
                backgroundColor: '#98BDFF',
              },
              {
                label: 'Reopened Issues',
                data: [this.issues?.Reopened],
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
      var areaData = {
        
      };
      var revenueChartCanvas = ($('#order-chart') as any)
        .get(0)
        .getContext('2d');
      var revenueChart = new Chart(revenueChartCanvas, {
        type: 'line',
        data: {labels: [
          '10',
          '',
          '',
          '20',
          '',
          '',
          '30',
          '',
          '',
          '40',
          '',
          '',
          '50',
          '',
          '',
          '60',
          '',
          '',
          '70',
        ],
        datasets: [
          {
            data: [
              200,
              480,
              700,
              600,
              620,
              350,
              380,
              350,
              850,
              '600',
              '650',
              '350',
              '590',
              '350',
              '620',
              '500',
              '990',
              '780',
              '650',
            ],
            borderColor: '#4747A1',
            borderWidth: 2,
            fill: false,
            label: 'Issues',
          },
          {
            data: [
              400,
              450,
              410,
              500,
              480,
              600,
              450,
              550,
              460,
              '560',
              '450',
              '700',
              '450',
              '640',
              '550',
              '650',
              '400',
              '850',
              '800',
            ],
            borderColor: '#F09397',
            borderWidth: 2,
            fill: false,
            label: 'Projects',
          },
        ],},
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
    clients: 0,
    customers: 0,
  };
  today = new Date();
  issues: any = {
    open: 0,
    ReOpened: 0,
    Resolved: 0,
    Closed: 0,
  };
  ngOnInit(): void {
    this.getCust();
    this.getCompany();
    this.getprojects();
    //this.getissues();
  }
  getCust() {
    this.customerService.getAll().subscribe((res) => {
      console.log(res);
      this.count.customers = res.length;
    });
  }
  getCompany() {
    this.companyService.getAll().subscribe((res) => {
      console.log(res);
      this.count.clients = res.length;
    });
  }
  getprojects() {
    this.projectService.getAll().subscribe((res) => {
      console.log(res);
      this.count.projects = res.length;
    });
  }
  // getissues() {
  //   this.issueService.getAllIssue().subscribe((res) => {
  //     console.log(res);
  //     for (let i of res) {
  //       if (i.issue_status != 'R') {
  //         this.count.issues += 1;
  //       }
  //       if (i.issue_status == 'O') {
  //         this.issues.open += 1;
  //       }
  //       if (i.issue_status == 'RE') {
  //         this.issues.Reopened += 1;
  //       }
  //     }
  //   });
  // }
}
