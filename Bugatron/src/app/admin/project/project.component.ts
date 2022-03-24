import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectInfo } from 'src/app/shared/model/project-info.model';
import { ProjectInfoService } from 'src/app/shared/service/project-info.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projList:any =[];
  proj: ProjectInfo = {
    project_id: 0,
    project_name: '',
    project_company: '',
    created: new Date(),
    customer_id: 0,
  };
  constructor(private projectService:ProjectInfoService,private router:Router) { }

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
  editProj(id:any){
    this.router.navigate(['/admin/project/add',id]); 
  }
  ProjAdd() {
    this.router.navigateByUrl('/admin/project/add');
  }
}
