import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeveloperInfoService } from 'src/app/shared/service/developer-info.service';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css'],
})
export class DeveloperComponent implements OnInit {
  devList: any = [];
  constructor(private developerService: DeveloperInfoService,private router:Router) {}

  ngOnInit(): void {
    this.getDev();
  }
  getDev() {
    this.developerService.getAll().subscribe((res) => {
      console.log(res);
      this.devList = res;
      setTimeout(() => {
        ($('#dtable') as any).dataTable();
      });
    });
  }
  delDev(id: any) {
    this.developerService.delete(id).subscribe((res) => {
      console.log(res);
      this.getDev();
    });
  }
  editDev(id: any) {
    this.router.navigate(['/admin/developer/add', id]);
  }
  devAdd(){
    this.router.navigateByUrl('/admin/developer.add');
  }
}
