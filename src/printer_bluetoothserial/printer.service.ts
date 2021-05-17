
import { ESCPOSImage } from './ESCPOSImage';
import { ESCPOSPrinter } from './ESCPOSPrinter';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import * as htmlToImage from 'html-to-image';
import {printer_model,item_model} from './print.model';
import {Injectable} from '@angular/core';

@Injectable()
export class PrinterService  {

  constructor(public btSerial: BluetoothSerial,private toast: ToastController,private loadingCtrl: LoadingController) {
  }

  whitespace ="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYYAAAAKCAYAAACwhfnyAAAAfUlEQVRoQ+3YIQ4AIAwDQPb/RxeDAEEyv0NjOJo0WyXJcggQIECAwBEoxSALBAgQIHALKAZ5IECAAIFHQDEIBAECBAgoBhkgQIAAgb+AiUE6CBAgQMDEIAMECBAgYGKQAQIECBBoClglNaFcI0CAwBQBxTDlp72TAAECTYENtZgn40KBqGgAAAAASUVORK5CYII=";
  base64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALkAAAAPCAQAAAASN6a/AAAALklEQVR42u3QMQEAAAgDINc/9Izg5wURSDu8inLlylGuHOXKUa5cOcqVo1w5pwUfVx3yeam3iwAAAABJRU5ErkJggg==";
  image = "";

 public async convert_data_to_invoice(data:printer_model){
    
    let height = 270;
        height += (20*data.productDetails.length);
    let html_string  =""
        html_string +="<img src='./assets/imgs/custom-marker-icon.png' >"
        html_string +="<h5><center>"+data.titel+"</center></h5>"
        html_string +="<h6><center>"+data.invoid_name+"</center></h6>"
        html_string +="<b>ເລກທີບິນ : "+data.ticket_number+" </b><br/>"
        html_string +="<b>ວັນທີ : "+data.ticket_date+" </b><br/>"

        if(data.ticket_table){
          html_string +="<b>ໂຕະ : "+data.ticket_table+"</b><br/>"
        }
        if(data.ticket_customer){
          html_string +="<b>ຊື້ລູກຄ້າ : "+data.ticket_customer+"</b><br/>"
        }
       
     
        html_string +="<b> ----------------------------- </b><br/>"
        html_string +="<b>ລາຍການ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ລາຄາລວມ </b><br/>"
        html_string +="<b> ----------------------------- </b><br/>"

        for (let index = 0; index < data.productDetails.length; index++) {
            const item = data.productDetails[index];
            html_string +="<b>"+item.name+" <br/> "+item.qty+" x "+this.convert_number_format(item.price)+" = "+this.convert_number_format(item.total)+" ₭ </b><br/>";
        }

        html_string +="<p> ----------------------------- </p>"
        html_string +="<b>ລວມເງີນ: "+this.convert_number_format(data.amount)+" ₭</b><br/>"
        html_string +="<b>ສ່ວນຫຼຸດ: "+this.convert_number_format(data.discount)+" ₭</b><br/>"
        html_string +="<b>VAT 10%: "+this.convert_number_format(data.tax)+" ₭</b><br/>"
        html_string +="<b>ລວມ "+data.productDetails.length+" ລາຍການ</b><br/>"
        html_string +="<b> ----------------------------- </b><br/>"
        html_string +="<b>ລວມທັງໝົດ: "+this.convert_number_format(data.total)+" ₭</b><br/>"
        html_string +="<b> ----------------------------- </b><br/>"
      
        html_string +="<b><center>-- ຂໍຂອບໃຈ --</center></b><br/>"

    let body = document.querySelector('#template') as HTMLDivElement;
    //let body = document.createElement('div');
        body.style.width = '140px';
        body.style.maxWidth="140px";
        body.style.display='inline-block';
        body.style.fontSize ='8px';
        body.innerHTML = html_string;
       
        
        

        

        return await htmlToImage.toPng(body, { height: height, width: 130, backgroundColor: 'white' })
      
 }


 public async convert_html_to_image(html_string:string){
  

  let body = document.querySelector('#print_view') as HTMLDivElement;
 
      body.style.display='inline-block';
      body.style.fontSize ='8px';
      body.innerHTML = html_string;
     
      
      

      

      return await htmlToImage.toPng(body, { height: body.offsetHeight, width: 595 , backgroundColor: 'white' })
    
}


public convert_number_format(n:number){
//  return n.toFixed(2);
  if(n){
    return n.toLocaleString(
      undefined, // leave undefined to use the browser's locale,
                 // or use a string like 'en-US' to override it.
      { minimumFractionDigits: 0 }
    );
  }else{
    return 0;
  }
  
}

public  formatDate(date) {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return [day, month, year].join('-');
}

 public async convert_data_to_print_test(data:any ={}){
  
    
  
  let html_string  =""
  html_string +="<h5><center> Test Printer "+data.name+"</center></h5><br/>"
  html_string +="<h6><center>-- OK --</center></h6><br/>"

     

  let body = document.createElement('div');
  body.style.width = '140px';
  body.style.maxWidth="140px";
  body.style.display='inline-block';
  body.style.fontSize ='6px';
  body.innerHTML = html_string;

      

      return await htmlToImage.toPng(body, { height: 200, width: 130, backgroundColor: 'white' })
    
}


  public convert_img_to_buffer(image): Promise<Buffer> {
    
      return new Promise<Buffer>((resolve, rejects) => {
        try {
          let img = new Image();
          img.src = image;

          let escposImage = new ESCPOSImage(img);
          let escposPrinter = new ESCPOSPrinter(new Buffer([]));
          escposPrinter.raster(escposImage);

          resolve(escposPrinter.getBuffer());
        } catch (error) {
         
          rejects(error);
        }
  
      })
  
  }



  public splitImage(image:string,maxhieght: number = 10) : Promise<Array<string>> {
    
     

      return new Promise<Array<string>> ((resolve, rejects) => {
          try {
              let canvas = document.createElement('canvas');
              let ctx: CanvasRenderingContext2D;
                  ctx = canvas.getContext("2d");
              let parts  = [];
              let img = new Image();
              img.src = image;
              img.onload = () => {
                const totalparts = Math.ceil(img.height / maxhieght);
                // console.log('img.height', img.height);
                // console.log('total parts', totalparts);
                const w2 = img.width;
                const h2 = maxhieght;
  
                for (let i = 0; i < totalparts; i++) {
                      let x = 0,
                      y = (-h2 * i);
                  //  console.log('x',x,'y',y);
                      canvas.width = w2;
                      canvas.height = maxhieght;
                  //  console.log('count ', i);
                  //    console.log(img, x, y, w2, img.height);
                      ctx.drawImage(img, x, y, w2, img.height); // img, x, y, w, h
  
                      if(canvas.toDataURL()!==this.whitespace){parts.push(canvas.toDataURL());}
                  }
  
              }
             
              
                
            resolve(parts);
          } catch (error) {
           console.log(error);
           
            rejects(error);
          }
    
        })

   
  
  
  }



  public searchBluetoothPrinter() {
    //This will return a list of bluetooth devices 
    return this.btSerial.list();
  }

  private connectToBluetoothPrinter(macAddress) {
    //This will connect to bluetooth printer via the mac address provided
    return this.btSerial.connect(macAddress);
  }

  private disconnectBluetoothPrinter() {
    //This will disconnect the current bluetooth connection
    return this.btSerial.disconnect();
  }

  public sendToBluetoothPrinter(macAddress,data:Array<string>) {
    //1. Try connecting to bluetooth printer
    console.log('sendToBluetoothPrinter');
    
    let parent = this;
    const subs = this.connectToBluetoothPrinter(macAddress).subscribe(async v => {
      
        //2. Connected successfully
       
       
        try {
         
            for (let index = 0; index < data.length; index++) {
                setTimeout(async s => {
                const element = data[index];
            
                await parent.btSerial.write(await this.convert_img_to_buffer(element));
                if (index + 1 >= data.length) {
                    await parent.btSerial.write(await this.convert_img_to_buffer(this.whitespace));
                    await parent.btSerial.write(await this.convert_img_to_buffer(this.whitespace));
                    await parent.btSerial.clear();
                    await parent.disconnectBluetoothPrinter();

                  

                    subs.unsubscribe();
                }
                }, 100);

            }
         
            } catch (error) {

              const toast = await this.toast.create({
                message: 'error sendToBluetoothPrinter'+JSON.stringify(error.error)
                  ,
                duration: 2000
              });
              toast.present();
            
            console.log(error);
            }

      },  err => {
        console.log(err);

        this.toast.create({
          message: ' error '+JSON.stringify(err),
          duration: 3000
        }).then(r => {
          r.present();
        }).catch(e => {
          console.log(e);
    
        });
        
        //If there is an error connecting to bluetooth printer
        //handle it here
      })
  }

  public async printOut(name){
   
      let print = new printer_model();
      let item = new item_model();
          item.name="ຕຳໝາກຮຸ່ງ";
          item.qty = 2 ;
          item.price = 15000;
          item.total = 30000;

      let productDetails = [];
          productDetails.push(item);
          productDetails.push(item);
          productDetails.push(item);

          print.titel = 'ຮ້ານອາຫານຄ້ຳຄູນ';
          print.invoid_name = 'ໃບບິນ';
          print.ticket_number = 123;
          print.ticket_customer = "";
          print.ticket_table = "ໂຕະ 15";
          print.productDetails = productDetails;
          print.amount = 90000;
          print.discount = 5000;
          print.total = 85000;





    //console.log(image);
      let image = await this.convert_data_to_invoice(print);
      console.log(image);
      
      let data =  await this.splitImage(image);
      this.sendToBluetoothPrinter(name,data);
      
   
      // 
  }

  
}
