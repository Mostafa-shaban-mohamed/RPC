import { Component, HostListener } from '@angular/core';
import { SharedDataService } from './shared/dataStorage/shared-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RPC';

  constructor(private dataShared: SharedDataService){}

  // This function will be called when the user presses the F key
  @HostListener('window:keydown', ['$event'])

  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'f' || event.key === 'F') {
      // Do something here
      this.dataShared.fullScreen = true;
    }
    if (event.key === 'Escape') {
      // Do something here
      this.dataShared.fullScreen = false;
    }
  }
}
