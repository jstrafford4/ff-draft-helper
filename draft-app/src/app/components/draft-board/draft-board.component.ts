import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../../services/players.service';
import { Player } from '../../models/player';

@Component({
  selector: 'app-draft-board',
  templateUrl: './draft-board.component.html',
  styleUrls: ['./draft-board.component.css']
})
export class DraftBoardComponent implements OnInit {

  qbs: Player[] = [];
  rbs: Player[] = [];
  wrs: Player[] = [];
  tes: Player[] = [];
  constructor(private playersService: PlayersService) { }

  ngOnInit() {
    this.playersService.getQBs().subscribe(data => {
      console.log("QBS!");
      this.qbs = data;
    });

    this.playersService.getRBs().subscribe(data => {
      console.log("RBS!");
      this.rbs = data;
    });

    this.playersService.getWRs().subscribe(data => {
      console.log("WRS!");
      this.wrs = data;
    });

    this.playersService.getTEs().subscribe(data => {
      console.log("TES!");
      this.tes = data;
    });
  }

  draft(player: Player): void {
    // connect to db
    //player.wasDrafted = !player.wasDrafted;
    //console.log(player);
    this.playersService.draftPlayer(player.position, player.playerId, !player.wasDrafted)
        .subscribe(data => {
          console.log("draft results in dbC", data);
          player.wasDrafted = !player.wasDrafted;
        });
  }

  tierColor(player: Player, tier: string): string {
      if(player.wasDrafted) return "strikeout";
      return this.colorClasses[parseInt(tier) % 9];
  }

  private colorClasses = [
    "bg-navy blue",
    "bg-blue aqua",
    "bg-aqua navy",
    "bg-teal",
    "bg-olive silver",
    "bg-maroon white",
    "bg-orange black",
    "bg-black silver",
    "bg-yellow black",

  ];

  


}
