import { Component } from '@angular/core';
import { HomeService } from './home.service';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { EmotionSelectDialogComponent } from './emotion-select-dialog/emotion-select-dialog.component';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  moodArray:any = []
  emojiArray:any = ['🚫','😡','😟','😐','🙂','😃']

  userID:any;
  userCurrentMood:any;
  userRemarks:any

  // ----------------------------------------


  constructor(private homeService: HomeService, public dialog:MatDialog, private router: Router){}


  ngOnInit(){
   
    this.onLoad()

  }

  onLoad(){

    //check if login
    if(localStorage.getItem("userID") == null){
      this.router.navigate(['/'])
    }else{
      this.getMoodFromService()
      this.getLocalStorage()
    }
  }

  getLocalStorage(){

    let userIDLocalStorage = localStorage.getItem("userID");
    this.userID = userIDLocalStorage;


  }

  getMoodFromService(){
    this.homeService.getMoods().subscribe((result:any)=>{
      this.moodArray = result.data;
    })
  }

  updateMood(){
    let moodObject = {"userID":this.userID,"userCurrentMood":this.userCurrentMood,"userSelectedRemarks":this.userRemarks}

    this.homeService.updateMood(moodObject).subscribe((result:any)=>{
      // alert(result.data)
      this.getMoodFromService()
    })
  }

  openDialog(){
    const dialogRef = this.dialog.open(EmotionSelectDialogComponent, {
      height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {

      let selectedUserMood = localStorage.getItem("mood-update");
      let selectedUserRemarks = localStorage.getItem("mood--update-remarks");

      this.userRemarks = selectedUserRemarks
      this.userCurrentMood =  selectedUserMood

      this.updateMood()
    });
  }

  logout(){
    localStorage.removeItem("userID");
    this.router.navigate(['/'])
  }



}
