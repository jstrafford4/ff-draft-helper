import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ContestService {

  constructor(private http: Http) { }

  getPlayersForContest(position: string, contestName: string) {
    return this.http.get(`/api/salaries/${position}/contest/${contestName}`)
      .map(function (res) {
        return res.json();
      });
  }

  assignScoreToSalary(position: string, playerId: string, contest: string, score: number){
    const body = {
      'position': position,
      'playerId': playerId,
      'contest': contest,
      'score': score
    };
    return this.http.put('/api/scoreSalary', body)
      .map(function(res){
        console.log("pService result", res);
        return res.json();
      });
  }
}
