import { Component } from '@angular/core';
import { CustomerInfoService } from './shared/service/customer-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bugatron';
  constructor(private customerService:CustomerInfoService){
    this.customerService.getAll().subscribe(res =>{
      console.log(res);
    })
  }
}
