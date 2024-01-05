import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-single-game',
  templateUrl: './single-game.component.html',
  styleUrls: ['./single-game.component.css']
})
export class SingleGameComponent {
  myChoose: gameChoose | string = '';
  computerChoose: gameChoose | string = '';
  FinalResult: PlayerStatus | string = 'Still Waiting...';

  constructor(private router: Router, private modalService: NgbModal){}

  onChoose(key: number){
    this.myChoose = gameChoose[key];
  }

  onConfirm(content: any){
    let computerKey = 1;
    computerKey = this.getRandomNumber(1,3);
    this.computerChoose = gameChoose[computerKey];
    this.FinalResult = this.gettingWinner();
    //wait for computer choose to display on screen
    setTimeout(() => {
      this.openModal(content);
    }, 1000);
  }

  //decide which player won
  gettingWinner() : string{
    if(this.myChoose == gameChoose[1]){
      if(this.computerChoose == gameChoose[2])
        return PlayerStatus[2];
      if(this.computerChoose == gameChoose[3])
        return PlayerStatus[1];
    }
    else if(this.myChoose == gameChoose[2]){
      if(this.computerChoose == gameChoose[1])
        return PlayerStatus[1];
      if(this.computerChoose == gameChoose[3])
        return PlayerStatus[2];
    }
    else if(this.myChoose == gameChoose[3]){
      if(this.computerChoose == gameChoose[1])
        return PlayerStatus[2];
      if(this.computerChoose == gameChoose[2])
        return PlayerStatus[1];
    }
    //  equals
    return PlayerStatus[3];
  }

  //generate random number to choose between rock-paper-scissor
  getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  //modal
  openModal(content: any){
    this.modalService.open(content, {backdrop: false, keyboard: true}).result.then((result) => {
      //this.closeResult = ;
      console.log(`Closed with: ${result}`);
      if(result == 'Yes'){
        this.myChoose = '';
        this.computerChoose = '';
        this.FinalResult = 'Still Waiting...';
      }else{
        this.router.navigate(['']);
      }
    }, (reason) => {
      //this.closeResult = ;
      console.log(`Dismissed ${this.getDismissReason(reason)}`);
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  closeModal(){
    this.modalService.dismissAll();
  }
}

export enum gameChoose{
  Rock = 1,
  Paper = 2,
  Scissor = 3
}

export enum PlayerStatus{
  Win = 1,
  Loss = 2,
  Draw = 3
}
