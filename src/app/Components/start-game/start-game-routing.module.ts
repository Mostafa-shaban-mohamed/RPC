import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartMenuComponent } from './start-menu/start-menu.component';
import { SingleGameComponent } from './single-game/single-game.component';

const routes: Routes = [
  { path: '', component: StartMenuComponent},
  { path: 'single-game', component: SingleGameComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StartGameRoutingModule { }
