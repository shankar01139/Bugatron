import { Component, OnInit } from '@angular/core';
import { DeveloperInfoService } from 'src/app/shared/service/developer-info.service';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {
  devList:any =[];
  constructor(private developerService:DeveloperInfoService) { }

  ngOnInit(): void {
    this.getDev();
  }
  getDev(){
    this.developerService.getAll().subscribe(res =>{
      console.log(res);
      this.devList = res;
      setTimeout(()=>{
        ($("#dtable")as any).dataTable();
      })
    })
  }
  delDev(id:any){
    this.developerService.delete(id).subscribe(res =>{
      console.log(res);
      this.getDev();
    })
  }

}
