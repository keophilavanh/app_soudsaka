import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { CategoryAddPage } from '../category-add/category-add.page';
import { CategoryInfoPage } from '../category-info/category-info.page';
import { CategoryService} from "src/service/category.service"

@Component({
  selector: 'app-category-manage',
  templateUrl: './category-manage.page.html',
  styleUrls: ['./category-manage.page.scss'],
})
export class CategoryManagePage implements OnInit {

  public page:number=1
  public limit : number=10
  public keyword: string = ""

  public category_list:Array<any> = [];

  constructor(private modalController:ModalController,private route:Router,public loadingCtrl: LoadingController,private CategoryService:CategoryService) { }

  ngOnInit() {
    this.loadcategory()
  }

  async add_Category() {
    const modal = await this.modalController.create({
      component: CategoryAddPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'titel': 'Add Table',
        'status': 0
       
      }
    });

    modal.onDidDismiss().then(
      res=>{
        console.log(res);
        if(res.data.reload){
          this.page = 1
          this.limit = 10
          this.loadcategory();
        }
        
      }
    )
    
    return await modal.present();
  }

  async Category_info(item:any) {
    const modal = await this.modalController.create({
      component: CategoryInfoPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'item': item,
        'status': 0
       
      }
    });

    modal.onDidDismiss().then(
      res=>{
        console.log(res);
        if(res.data.reload){
          this.page = 1
          this.limit = 10
          this.loadcategory();
        }
        
      }
    )
    
    return await modal.present();
  }

  close(){

    this.route.navigate(['/tabs/account'])
  }

  async loadcategory(){
    const data={

      page:this.page,
      limit:this.limit,
      keyword:this.keyword
    }
    console.log("-----data sent to server",data);
  
    const loader = await this.loadingCtrl.create({
      message: 'Please wait...',
     
    });
    loader.present();
    
  this.CategoryService.categorylist(data).subscribe(
    res=>{
      console.log(res);
      
          this.category_list = res.Data
      loader.dismiss();
    },err=>{
      loader.dismiss();
    }
  )
  }

async  doInfinite(event) {
    
    const data={

      page:this.page+1,
      limit:this.limit,
      keyword:this.keyword
    }
    console.log("-----data sent to server",data);
  
    const loader = await this.loadingCtrl.create({
      message: 'Please wait...',
     
    });
    loader.present();
    
      this.CategoryService.categorylist(data).subscribe(
        res=>{
          try {
            if (res.Data.length) {
              this.category_list = this.category_list.concat(res.Data);
              event.target.complete();
            }else{
              console.log('else');
              
              event.target.complete();
              event.target.disabled = true;
            }
          } catch (error) {
            event.target.complete();
            event.target.disabled = true;
          }
          loader.dismiss();
        },err=>{
          loader.dismiss();
        }
      )

   
  }

}
