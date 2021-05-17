import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  public username :string;
  constructor(
    private route:Router
  ) { }

  ngOnInit() {
    this.username = localStorage.getItem('username')
  }

  isLogout(){
   localStorage.removeItem('token')
this.route.navigate(['/login'])
  }

  user_manage() {
    this.route.navigate(['./user-manage']);
  } 
  
  
  product_manage() {
    this.route.navigate(['./product-manage']);
  } 


  table_manage() {
    this.route.navigate(['./table-manage']);
  } 

  category_manage() {
    this.route.navigate(['./category-manage']);
  }

  }
  
