import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContestService } from '../../services/contest.service';

@Component({
  selector: 'app-contest',
  templateUrl: './contest.component.html',
  styleUrls: ['./contest.component.css']
})
export class ContestComponent implements OnInit {

  name: string;
  positions:any[] = [];

  constructor(private route: ActivatedRoute, private contestService: ContestService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.name = params['contestName'];

      this.getPlayers('qb');
      this.getPlayers('rb');
      this.getPlayers('wr');
      this.getPlayers('te');
      this.getPlayers('def');
    });
  }

  getPlayers(position: string) {
    this.contestService.getPlayersForContest(position, this.name).subscribe(data => {
      for(let player of data){
        if(player[this.name]){
          if(player[this.name]['gameInfo']){
            player[this.name]['gameInfo'] = player[this.name]['gameInfo'].split(' ')[0];
          }
        }
      }

      this.positions.push(data);
    });
  }

  saveScore(player: any){
    if(player.position == 'dst'){
      player.position = 'def';
    }
      this.contestService.assignScoreToSalary(player.position, player.playerId, this.name, player[this.name].score)
                          .subscribe(res => {
                            console.log(res);
                          });
  }

  tierColor(player: any){
    return 'black';
  }

}
