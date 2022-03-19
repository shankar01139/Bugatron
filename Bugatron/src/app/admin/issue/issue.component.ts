import { Component, OnInit } from '@angular/core';
import { IssueInfoService } from 'src/app/shared/service/issue-info.service';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {
  issueList:any=[];
  constructor(private issueService:IssueInfoService) { }

  ngOnInit(): void {
    this.issueService.getAll().subscribe(res =>{
      console.log(res);
      this.issueList = res;
      setTimeout(()=>{
        ($("#dtable")as any).dataTable();
      })
    })
  }

}
