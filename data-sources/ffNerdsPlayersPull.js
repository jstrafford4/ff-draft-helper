var request = require('request');
var fs = require('fs');

var api = 'https://www.fantasyfootballnerd.com/service/';
var apiKey = 'ii727fp96ae3';

var urls = ['players/json/' + apiKey + '/QB',
            'players/json/' + apiKey + '/RB',
            'players/json/' + apiKey + '/WR',
            'players/json/' + apiKey + '/TE',
            'players/json/' + apiKey + '/DEF',
            'players/json/' + apiKey + '/K'
            //'tiers/json/test/',
            ];
for(var i = 0; i < urls.length; i++){
    var fileName = 'ffn/players/' + urls[i].split('/').join('_') + '.json';
    request(api + urls[i]).pipe(fs.createWriteStream(fileName));
}
