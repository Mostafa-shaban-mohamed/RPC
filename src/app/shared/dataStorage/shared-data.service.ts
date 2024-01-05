import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  docElement: HTMLElement;
  private _fullScreen: boolean = false;
  public get fullScreen(): boolean {
    return this._fullScreen;
  }
  public set fullScreen(value: boolean) {
    this._fullScreen = value;
    if(this._fullScreen){
      this.docElement.requestFullscreen();
    }
    else{
      document.exitFullscreen();
    }
  }

  constructor() {
    this.docElement = document.documentElement;
    if (!window.screenTop && !window.screenY) {
      this._fullScreen = true;
    }
  }
}
