import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IssueInfoService } from 'src/app/shared/service/issue-info.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(private issueService:IssueInfoService,private router:Router) { }
  issueList :any = [];
  issueStatus:any;
  ngOnInit(): void {
    this.getAssignedForMe();
  }
  getAssignedForMe(){
    this.issueService.getAssignedforMe(+sessionStorage.getItem("userId")).subscribe(res =>{
      for(let i of res){
        this.issueStatus = i.issue_status;
        console.log(this.issueStatus)
        this.issueList.push(i);
      }
      setTimeout(() => {
        ($('#dtable1') as any).dataTable();
      });
    })
  }
  onStatusChange(event:any,id:any){
    sessionStorage.setItem("selectedStatus",event.target.value);
    this.router.navigate(['/developer/tasks/action', id]);
  }
}
