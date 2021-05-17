import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { TicketService } from 'src/service/ticket.service';
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.page.html',
  styleUrls: ['./item-list.page.scss'],
})
export class ItemListPage implements OnInit {


  @Input() category_list: any;

  public product_list:any;

public ticketId:string
  constructor(
    public modalCtrl: ModalController,
    private ticket: TicketService,
    public route:Router,
  ) { }

  ngOnInit() {
    this.load_product()
  }

  load_product(){
 
    this.select(this.category_list[0])
  }

  select(category:any){
    this.product_list = category.menu;
    console.log(this.product_list);
    
  }


  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }


  select_product(item) {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': false,
       'item':item
    });
  }

  // OncreateBill() {
  //   const datalist = {

    
      
  //       ticket:{
  //           ticket_note:"first",
  //           ticket_tag:"2",
  //           customer:"thone",
  //           amount:"200000",
  //           discount:"10",
  //           tax:"2",
  //           total:"3000000",
  //           department_id:"2"
  //       },
  //       ticket_detail:[
  //           {
  //               product_id:"1",
  //               product_name:"iphone",
  //               quantity:"2",
  //               price:"4000000",
  //               total:"60000000"
  //           },{
  //               product_id:"2",
  //               product_name:"ວິຊ່່າ ເຂົ້າ-ອອກ 6ເດືອນ",
  //               quantity:"21",
  //               price:"4000001",
  //               total:"60000001"
  //           }
  //       ]
    
    
    

  //   }
    
  //   console.log(datalist);
  //   this.ticket.addTicket(datalist).subscribe(
  //     res => {
  //       this.modalCtrl.dismiss({
  //         'dismissed': true
  //       });
  //       console.log(res);
  //       this.route.navigate(['/invice-bill'], { queryParams: { ticketID: res.ticket_id } })
  //   // this.route.navigate(['/invice-bill'], { queryParams: { ticketID: this.ticketId} })
  //       // this.dismiss()
  //     }, error => {
  //       console.log(error);
  //     }
  //   )
  // }

}
