import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ItemListPage } from "../item-list/item-list.page";
import { ItemInfoPage } from "../item-info/item-info.page"

import { InviceBillPage } from "../invice-bill/invice-bill.page";
import { TicketService } from 'src/service/ticket.service';

import { CategoryService} from "src/service/category.service"
import  { OptionPage} from '../option/option.page'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public table:any;

  public ticket: any;
  public ticketdetail: Array<any>;
  public category_list: any;
  public customer:string = "";



  constructor(
    public loadingCtrl: LoadingController,
    private route: Router,
    private router:ActivatedRoute,
    private modalController: ModalController,
    private TicketService: TicketService,
    private alertController:AlertController,
    private Category:CategoryService

  ) {
    
 
  }

  ngOnInit(){
    this.ticketdetail = [];
    this.load_list()
    this.load()
  }

  load(){
    
    let id = this.router.snapshot.paramMap.get('ItemId');
    console.log(id);
    this.router
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.table = {
          table_id:params['table_id'],
          table_name:params['table_name'],
        }
        this.load_ticket_by_table(params['table_id'])
        this.ticketdetail=[];
        
      });
  }

async load_ticket_by_table(table_id:number){
  const prame = {
    t_id:table_id
  }
  console.log(prame);
  
  const loader = await this.loadingCtrl.create({
    message: 'Please wait...',
   
  });
  loader.present();
 

  this.TicketService.getorderByTable(prame).subscribe(
    res=>{
       console.log(res);
       try {
        this.ticket = res.order[0]
        if(res.list_order) {
          this.ticketdetail = res.list_order
        } 
        console.log(this.ticket);
        console.log(this.ticketdetail);
       } catch (error) {
     
       }
     
       loader.dismiss();
   
    },
    err=>{
       console.log('User list ERROR',err);
       loader.dismiss();
    }
  )
  }


async  load_list(){

 

    const prame = {
    
      page:"",
      limit:"",
      keyword:""
    }
    console.log(prame);
    
    const loader = await this.loadingCtrl.create({
      message: 'Please wait...',
     
    });
    loader.present();
   

    this.Category.getcategory_menu(prame).subscribe(
      res=>{
         console.log(res);
         this.category_list = res;
         loader.dismiss();
     
      },
      err=>{
         console.log('User list ERROR',err);
         loader.dismiss();
      }
    )

  }


  keyupGetcutomer(e: KeyboardEvent) {
    this.customer = (e.target as HTMLInputElement).value
    // console.log( this.messeagesInput);
  }






 



  async billModal() {
    const modal = await this.modalController.create({
      component: InviceBillPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }


  async item_list() {
    const modal = await this.modalController.create({
      component: ItemListPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'category_list': this.category_list,
        
      }

    });
    modal.onDidDismiss().then(
      res=>{
        if(res.data.item){
          this.Add_product(res.data.item)
        }
      }
    )
    
    return await modal.present();
   
  }

  Add_product(item:any){

    const product = {
      product_id:item.f_id,
      product_name:item.f_name,
      quantity:1,
      price:item.price, 
      total:item.price,

    }

    this.ticketdetail.push(product);
    //this.ticketdetail = [product];
    
  }


  count_total(){

    let total = 0;
    try {
      for (let index = 0; index < this.ticketdetail.length; index++) {
        const element = this.ticketdetail[index];
  
        total += Number(element.total) 
        
        
      }
    } catch (error) {
      
    }

   

    return total;

  }


async  edit(item:any,index:number){
    console.log(item);

    const modal = await this.modalController.create({
      component: ItemInfoPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'item': item,
        
      }

    });
    modal.onDidDismiss().then(
      res=>{
        console.log(res);
        
        if(res.data.edit){
         console.log('edit');

          this.ticketdetail[index].quantity = res.data.item.quantity;
          this.ticketdetail[index].total = res.data.item.total;
         
        }else if(res.data.remove){
          console.log('remove');
          this.ticketdetail.splice(index, 1)
        }
      }
    )
    
    return await modal.present();
    
  }

async  check_create_invoice(){

    if(this.ticketdetail.length == 0){
      console.log(this.ticketdetail.length);
      return
    }else{

      this.OncreateBill()

      console.log('con');

      // const alert = await this.alertController.create({
      //   cssClass: 'my-custom-class',
      //   header: 'Confirm!',
      //   message: 'Message <strong>ສ້າງໃບບິນຊຳລະເງີນ</strong>!!!',
      //   buttons: [
      //     {
      //       text: 'Cancel',
      //       role: 'cancel',
      //       cssClass: 'secondary',
      //       handler: (blah) => {
      //         console.log('Confirm Cancel: blah');
      //       }
      //     }, {
      //       text: 'Okay',
      //       handler: () => {
      //         console.log('Confirm Okay');
              
      //       }
      //     }
      //   ]
      // });
      // await alert.present();
    }
  }

  clear(){

   
    
    this.customer = '';
    this.ticketdetail = [];
  }


async  OncreateBill() {

  this.ticket = {
   
    t_id: this.table.table_id
   
  }

   


    const ticket_opject = {
        order:this.ticket,
        list_order:this.ticketdetail
    }
    
    console.log(ticket_opject);

    

   
    const loader = await this.loadingCtrl.create({
      message: 'Please wait...',
     
    });
    loader.present();
   

    this.TicketService.addorder(ticket_opject).subscribe(
      res => {
        this.clear();
        console.log(res);
        loader.dismiss();
        
   
      //  this.route.navigate(['/invice-bill'], { queryParams: { ticketID: res.ticket_id } })
  
      }, error => {
        console.log(error);
        loader.dismiss();
      }
    )
  }


  async  updateBil() {

  
  
     
  
  
      const ticket_opject = {
          order:this.ticket,
          list_order:this.ticketdetail
      }
      
      console.log('updateBil',ticket_opject);
  
      
  
     
      const loader = await this.loadingCtrl.create({
        message: 'Please wait...',
       
      });
      loader.present();
     
  
      this.TicketService.updateorder(ticket_opject).subscribe(
        res => {
          this.clear();
          console.log(res);
          loader.dismiss();
          
     
       //   this.route.navigate(['/invice-bill'], { queryParams: { ticketID: res.ticket_id } })
    
        }, error => {
          console.log(error);
          loader.dismiss();
        }
      )
    }


    async  Payment() {

  
  
     
  
  
    
      console.log('Payment',this.ticket);
  
      
  
     
      const loader = await this.loadingCtrl.create({
        message: 'Please wait...',
       
      });
      loader.present();
     
  
      this.TicketService.payment(this.ticket).subscribe(
        res => {
          this.clear();
          console.log(res);
          loader.dismiss();
          this.route.navigate(['/tabs/Table'])
     
       //   this.route.navigate(['/invice-bill'], { queryParams: { ticketID: res.ticket_id } })
    
        }, error => {
          console.log(error);
          loader.dismiss();
        }
      )
    }
  



  back_and_order(){
    console.log(this.ticket);
    
    if(this.ticket){
      console.log('have ticket',this.ticket);
      this.updateBil()
    }else{
      this.check_create_invoice()
    }
    this.route.navigate(['/tabs/Table'])
  }


  async option() {

    if(this.ticketdetail.length == 0){
      console.log(this.ticketdetail.length);
      return
    }


    const modal = await this.modalController.create({
      component: OptionPage,
      cssClass: 'my-custom-class',
      componentProps: {}

    });
    modal.onDidDismiss().then(
      res=>{
        if(res.data.payment){
          console.log('payment');
          this.Payment()
          
        }else if(res.data.print){
          console.log('print');
          this.route.navigate(['/invice-bill'], { queryParams: { ticketID: this.ticket.order_id } })
        }
      }
    )
    
    return await modal.present();
   
  }







}