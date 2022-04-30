import { Component, OnInit } from '@angular/core';
import { IssueInfoService } from 'src/app/shared/service/issue-info.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(private issueService:IssueInfoService) { }
  issueList :any = [];
  ngOnInit(): void {
    this.getAssignedForMe();
  }
  getAssignedForMe(){
    this.issueService.getAssignedforMe(+sessionStorage.getItem("userId")).subscribe(res =>{
      this.issueList = res;
      setTimeout(() => {
        ($('#dtable1') as any).dataTable();
      });
    })
  }
}
