import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { HomeComponent } from '../home.component';


@Component({
  selector: 'app-emotion-select-dialog',
  templateUrl: './emotion-select-dialog.component.html',
  styleUrls: ['./emotion-select-dialog.component.scss']
})
export class EmotionSelectDialogComponent {

  constructor(private dialogRef: MatDialogRef<HomeComponent>){}

  emojiArray:any = ['🚫','😡','😟','😐','🙂','😃'];
  selectedEmoji:any = "None"
  selectedIndex:any
  userRemarks:any;


  onBtnClick(index:any){
    this.selectedEmoji = this.emojiArray[index]
    this.selectedIndex = index
  }

  saveStatus(){
    localStorage.setItem("mood-update",this.selectedIndex);
    localStorage.setItem("mood--update-remarks",this.userRemarks);
    this.dialogRef.close()

  }

}
