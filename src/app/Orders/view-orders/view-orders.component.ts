import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { OrderServiceService } from '../orderService/order-service.service';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-orders',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, FormsModule],
  templateUrl: './view-orders.component.html',
  styleUrl: './view-orders.component.css'
})
export class ViewOrdersComponent {

  isadd:boolean=false;
  orders: any;
  items: any;
 

  detail: any;
  constructor(private os: OrderServiceService, private http: HttpClient) { }

  getAllOrders(){
    this.isadd = true;
    console.log("inside get all")
    //console.log(this.orders)
    this.http.get("http://localhost:3000/Orders")
      .subscribe((d: any)=>{
        this.orders = d
        console.log(this.orders)
      })
  };
  
  delete(id:string){
    this.http.delete(`http://localhost:3000/Orders/${id}`)
      .subscribe((data:any)=>this.getAllOrders())
      console.log("deleted")
    return this.getAllOrders();
  }
}
