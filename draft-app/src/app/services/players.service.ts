import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PlayersService {

  constructor(private http: Http) { }

  // Get all posts from the API
  getQBs() {
    return this.http.get('/api/quarterbacks')
      .map(function (res) {
        return res.json();
      });
  }

  getRBs() {
    return this.http.get('/api/runningbacks')
      .map(function (res) {
        return res.json();
      });
  }

    getWRs() {
    return this.http.get('/api/widereceivers')
      .map(function (res) {
        return res.json();
      });
  }

    getTEs() {
    return this.http.get('/api/tightends')
      .map(function (res) {
        return res.json();
      });
  }
  
  draftPlayer(position: string, playerId: string, wasDrafted: boolean){
      const body = {
        'position': position,
        'playerId': playerId,
        'drafted': wasDrafted
      };
      return this.http.put('/api/draft', body)
        .map(function(res){
          console.log("pService result", res);
          return res.json();
        });
  }
}
