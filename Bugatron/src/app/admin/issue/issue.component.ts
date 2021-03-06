import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IssueInfoService } from 'src/app/shared/service/issue-info.service';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {
  issueList:any=[];
  resolvedList:any=[];
  constructor(private issueService:IssueInfoService,private router:Router) { }

  ngOnInit(): void {
    this.getIssue();
  }
  getIssue(){
    this.issueService.getUnassignedIssues().subscribe(res =>{
      console.log(res);
      this.issueList = res;
      setTimeout(()=>{
        ($("#dtable")as any).dataTable();
      })
    })
    this.issueService.getResolvedIssues().subscribe(res =>{
      this.resolvedList = res;
      setTimeout(()=>{
        ($("#dtable1")as any).dataTable();
      })
    })
  }
  editIssue(id:any){
    sessionStorage.removeItem("isResolved");
   this.router.navigate(['/admin/issue/add',id]); 
  }
  ViewIssue(id: any) {
    sessionStorage.setItem("isResolved","true");
    this.router.navigate(['/admin/issue/add', id]);
  }
}
