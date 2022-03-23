import { Component, OnInit } from '@angular/core';
import { ProjectInfoService } from 'src/app/shared/service/project-info.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projList:any =[];
  constructor(private projectService:ProjectInfoService) { }

  ngOnInit(): void {
    this.getProj();
  }
  getProj(){
    this.projectService.getAll().subscribe(res =>{
      console.log(res);
      this.projList = res;
      setTimeout(()=>{
        ($("#dtable")as any).dataTable();
      })
    })
  }
  delProj(id:any){
    this.projectService.delete(id).subscribe(res =>{
      console.log(res);
      this.getProj();
    })
  }
}
