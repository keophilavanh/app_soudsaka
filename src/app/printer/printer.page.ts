import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

import { Printer, PrintOptions } from '@ionic-native/printer/ngx';


import {PrinterService} from '../../printer_bluetoothserial/printer.service';


@Component({
  selector: 'app-printer',
  templateUrl: './printer.page.html',
  styleUrls: ['./printer.page.scss'],
})
export class PrinterPage implements OnInit {
  public parts = [];
  public display:boolean;
  public list: Array<string> = [];
  constructor(private printerService:PrinterService,private printer: Printer, private toast: ToastController, private loadingCtrl: LoadingController,private alertCtrl:AlertController) { }

  ngOnInit() {
   // this.load_printer()
    this.print_to_driver();
   

  }

  print_to_driver(){
    this.printer.isAvailable().then(onSuccess =>{
      console.log(onSuccess);
      this.print()
      
    }, onError=>{
      console.log(onError);
    });
  }

  print(){
    let options: PrintOptions = {
      name: 'MyDocument',
      printer: 'ESC/POS Printer',
      duplex: true,
      orientation: 'portrait',
      monochrome: true,
      photo: true,
     

    }

    let logo:string = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAyADIDASIAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAAAAUBBgcDAv/EAC8QAAIBAwMDAgQFBQAAAAAAAAECAwAEEQUSIQYxQRNRIjJhcUKBkaHwBxQj0eH/xAAaAQACAwEBAAAAAAAAAAAAAAADBAABBQIG/8QAMBEAAQMDAQQJAwUAAAAAAAAAAQACEQMhMQQSQVFhBRMiMnGBkbHwFDOhQnLB0fH/2gAMAwEAAhEDEQA/AN+4GScUh1LqmysJ1hjU3EhOCI/Fe+qkmOiySwSuhTlgp+Yeaz5dqIPDsAzOcjA79/oBn8+aztdrPp6ZdvmABk2mTwHqTyyj6egaz9kYySrHfdfejEWjtFjXAO+RgRz54rhp3X7TZUxRXODgtGcd6z/RrK//AKh6/c2dleCz0y2G6SXbuZwTgHHknGcdhj3r3r/TOo9HaXba7Yai13YSuI5oZ4whBOQMgHkHGMjBGaIzSax1LYc4Cq64uZHKMJsjRgz2rW3R/a1a16ytJrhYpoGhDfiYgjvirJG8UyB4yrKexFY9p99b6nYQ3KZaKZQRnJKnJBH3Unj/ALVy6KjmYSu0z7FJULu4OOP59qX0esfU2mvEOaQCD4xbw3g+R3JfU6fqiCLtOCrliiporVSqRdVTsmjPDGN0kx2qP3NZHrl7pcsE1rcvMroAHhgbax5GQGbOB5P6ea1LqlWe6s1BXGHPxDIzis+6i09hbqxs7aUPIqku23GWA7jnv/PFYWuqN6y/eBBEGLCfLnxE5Wp0XsmtsvwRHsqf0vLrWg61I2kyhPWUxyLKhKlO/wAWPIyOR5+9M+tL/W9Qt4tPlmQaar+qqRoeXx+I/TkgV11KOXV51cvcWOns7IsEEah2G3BJyQTkLnnOK4HSjaXccml6lfuzM4MdwiEOcYPckHjjJB7UUdJvfVZqH1AHgH9MgciYzbgVoHS0wdkUrfu+e649Pz6XpELLM1xFONvqBm3BzzkqAPhPj65HtWs9FXDKXjaJY0mG+NVzjH5mqFp2NS1qaaHT4YRJEj4b5gSCOQe3Y9seDV40aMw6tZgFBwRhfbjmk6Wp2qxqVO+4g3PCZgD0vPKEt0kxjNllMQALjOY+ZV5oqOaK9HKxEk6msHvLBZIl3SQNvA9/eqhFpsmoxloMx+o2yOORMrIeSf3Ht7VpWMilkmjol2byyYQXGDnjKN9xXLIpPL4mfmMH3F4yuXtLogwqlc2AD/5YLBniUbFmLpK3YHk8A/Nz9q4Q2EMEiiOw00LGeMTM2Qe+AOxz+tONVGpRXcl7LYhpv7cwR3FuwJiBOSwBGQ3+qVWdvc39nZ2draXRjs5jLBLJIAU8hSdvxKDzgjnAz2oobpXDrHBv4n0yuhVqN7AJ/P8AiLnRblJJLqQbSy71ijjbL4wG74IAycZ5xTTpWy9e7N8IikKJsjz3NOm0241FUGqSRlFO70YgQufqe5ppFEkMYSNQqjgAUvVArlpDYA8p349yb54qmgtJJK90UUUZWgUUUVFFB7VCqFGAAB9KKKEfuDwP8K9y9UUUUVUooooqKL//2Q==";

 //   let content = document.getElementById('printer').innerHTML;
    let contents = ` <img  src="http://192.168.10.102/tax_multi/image/logo.png"  width="50"/>
                    <center> <u> ໃບບິນ </u> </center> <br>
                    <u> ເລກບິນ : 15 </u> <br>
                    <p> 
                        *****************************  <br>
                        ລາຍການ
                        *****************************  <br>
                        asdasdasdasdasdasda
                        *****************************  <br>
                        ລວມເງີນ : 150000 ກີບ
                       
                    </p>`;
    
    this.printer.print(contents, options).then(onSuccess=>{
      console.log(onSuccess);
      
    }, onError=>{
      console.log(onError);
      alert('err')
    });
  }

 async load_printer(){
    const loader = await this.loadingCtrl.create({
      message: 'Please wait...',

    });
    await loader.present();

       
       
        this.printerService.searchBluetoothPrinter().then(
                res => {
                  console.log(res);
                  this.list = res
                  loader.dismiss();
                 
                 
                },
                err => {
                  console.log(err);
                  loader.dismiss();
                  alert(JSON.stringify(err))
                }
        );
  }

  async select_Bluetooth(printer: any) {

    

    let alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Confirm Purchase',
      message: ' <strong>Do you want Select Print '+printer.name+'?</strong>!!!',
      buttons: [
        {
          text: 'select',
          handler: async ( blah) => {
            console.log('Confirm delete');

            const loader = await this.loadingCtrl.create({
              message: 'Please wait...',
        
            });
            await loader.present();
            try {
              
             

              this.display = true;


              let image = await this.printerService.convert_data_to_print_test(printer);
              this.parts = await this.printerService.splitImage(image);
              await this.printerService.sendToBluetoothPrinter(printer.id,this.parts);
              this.display = false;
              loader.dismiss();
              localStorage.setItem('printer',printer.id)
             
            } catch (error) {
              console.log(error);
     
              loader.dismiss();
              const toast = await this.toast.create({
                message: 'select_Bluetooth ',
                duration: 2000
              });
              toast.present();
              
            }
              
          
          }
        }, {
          text: 'Cancel',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }
      ]
    });
  
    await alert.present();

    

  }


}
