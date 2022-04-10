import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IssueInfoService } from 'src/app/shared/service/issue-info.service';

@Component({
  selector: 'app-issues-report',
  templateUrl: './issues-report.component.html',
  styleUrls: ['./issues-report.component.css']
})
export class IssuesReportComponent implements OnInit {

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
  editIssue(id:any){
   this.router.navigate(['/customer/addIssue',id]); 
  }
  delIssue(id:any){
    this.issueService.delete(id).subscribe(res =>{
      console.log(res);
    })
  }

}
