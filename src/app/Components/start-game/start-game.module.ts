import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartGameRoutingModule } from './start-game-routing.module';
import { StartMenuComponent } from './start-menu/start-menu.component';
import { SingleGameComponent } from './single-game/single-game.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    StartMenuComponent,
    SingleGameComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    StartGameRoutingModule,
    NgbModule
  ],
})
export class StartGameModule { }
