import { Component, OnInit, HostListener } from '@angular/core';
import { ParcelService } from './parcel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'remote-socket';
  public mobail: boolean = true;

  //@HostListener('document:keypress',['$event'])
  // handleKeyboardEvent(event: any){
  //   console.log(event);
  //   if(event.keyCode == 32) {
  //     console.log('Space');
  //   }
  // }
  jump() {
    this.parcel.sendJump();
  }
  scrHeight: any;
  scrWidth: any;

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.scrHeight = window.innerHeight;
    this.scrWidth = window.innerWidth;
    console.log( this.scrWidth);
    if(this.scrWidth < 768) {
      this.mobail = false;
    }
  }

  
  constructor(private parcel: ParcelService) {
    this.parcel.jumped().subscribe(function() {
      console.log("JUMPING>>>");
      // @ts-ignore
      if (currentstate == states.ScoreScreen)
      // @ts-ignore
        replayGame();
      // @ts-ignore
      else
      // @ts-ignore
        screenClick();
    });
  }
  
  ngOnInit() {
    this.getScreenSize();
  }

}
