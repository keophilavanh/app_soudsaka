import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public username: string;
  public password: string;
public spinner:boolean
  constructor(
    private authenticate: AuthService,
    private route:Router,
    public alert: AlertController,
    public loadingCtrl: LoadingController
  ) {
    this.spinner=false;
   }

  ngOnInit() {
  }
async  onLogin() {

    const loader = await this.loadingCtrl.create({
      message: 'Please wait...',
     
    });
    loader.present();
  
  

      const data = new UserLogin()
      data.username = this.username;
      data.password = this.password;
    
     
      console.log(data);
      
      this.authenticate.login(data).subscribe
  
        (res => {
          if(res.status==1){
            this.route.navigate(['/tabs'])
            console.log(res);
            localStorage.setItem('user',res.data.user_id)
         
            localStorage.setItem('token',res.token)
     
            localStorage.setItem('username',res.data.user_name)
          }else{
            if(res.status==0){
              console.log('errrr',res);
              this.error()
              this.spinner=false
              this.route.navigate(['/login'])

            }
          }

          loader.dismiss();
        }, error => {
          loader.dismiss();
         
          console.log( 'login errror',error);
  
        })

    
  }


  async error() {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'ຂໍອະໄພ',
      // subHeader: 'Subtitle',
      message: 'ລະຫັດຜ່ານຫລືຊື່ບໍ່ຖືກຕ້ອງ',
      buttons: ['ຕົກລົງ']
    });

    await alert.present();
  }
  keyupGetusername(e: KeyboardEvent) {
    this.username = (e.target as HTMLInputElement).value
    // console.log( this.messeagesInput);
  }
  keyupGetpassword(e: KeyboardEvent) {
    this.password = (e.target as HTMLInputElement).value
    // console.log( this.messeagesInput);
  }


}



export class UserLogin {
  username: string
  password: string
}