import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyInfoService } from '../shared/service/company-info.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  companyList :any = [];
  constructor(private companyService:CompanyInfoService,private router:Router) { }

  ngOnInit(): void {
    this.getCust();
  }
  getCust(){
    this.companyService.getAll().subscribe((res) => {
      console.log(res);
      this.companyList = res;
      setTimeout(()=>{
        ($("#dtable")as any).dataTable();
      })
    });
  }
  compAdd(){
    this.router.navigateByUrl('/admin/company/add');
  }

  deleteCust(id:any){
    this.companyService.delete(id).subscribe(res =>{
      console.log(res);
      this.getCust();
    },
    err =>{
      console.log(err);
    })
  }
  editCust(id:any){
   this.router.navigate(['/admin/company/add',id]); 
  }
}
