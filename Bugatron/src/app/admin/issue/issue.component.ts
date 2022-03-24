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
  constructor(private issueService:IssueInfoService,private router:Router) { }

  ngOnInit(): void {
    this.getIssue();
  }
  getIssue(){
    this.issueService.getAll().subscribe(res =>{
      console.log(res);
      this.issueList = res;
      setTimeout(()=>{
        ($("#dtable")as any).dataTable();
      })
    })
  }
  delIssue(id:any){
    this.issueService.delete(id).subscribe(res =>{
      console.log(res);
      this.getIssue();
    })
  }
  editIssue(id:any){
   this.router.navigate(['/admin/issue/add',id]); 
  }
}
