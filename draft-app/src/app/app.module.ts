import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PlayersService } from './services/players.service';
import { DraftBoardComponent } from './components/draft-board/draft-board.component';
import { ContestComponent } from './components/contest/contest.component';
import { ContestService } from './services/contest.service';

// Define the routes
const ROUTES = [
  {
    path: '',
    redirectTo: 'draft',
    pathMatch: 'full'
  },
  {
    path: 'draft',
    component: DraftBoardComponent
  },
  { 
    path: 'contest/:contestName',
    component: ContestComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DraftBoardComponent,
    ContestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES) // Add routes to the app
  ],
  providers: [PlayersService, ContestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
