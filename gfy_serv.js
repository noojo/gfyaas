var http = require('http');
var fs = require('fs');
var querystring =require('querystring');
var url = require('url');

var base_camp = '/home/videocon/www/gofuckyourselfasaservice.com/';
var hi;

function uRandNum(a,p) {
  if ( p.length === 0 ) {
    for (var i = 0; i < a.length; i++) {
      p.push(i);
    };
  }
  var ui = Math.floor(p.length * Math.random());
  var drawn = p.splice(ui, 1);
  return drawn[0];
}


function sendPic(url, response) {
  try {
        var st = fs.statSync(mega[i]);
        if ( st.isDirectory() || mega[i] === null) {
          console.log("DIR REDIRECT");
          var n = i + 1;
          response.writeHead(302, {
                'Location': 'http://ultron-5.local:9000/' + n
                //add other headers here...
              });
              response.end();
        }
        console.log(i + ' ' + url);
        img = fs.readFileSync(mega[i]);
        seen.push(mega[i]);
        fs.writeFileSync('seen.json', JSON.stringify(seen), 'utf-8');
        response.writeHead(200, {'Content-Type': 'image/jpg' });
        response.end(img, 'binary');
  }  
  catch (e) {
    console.log(e + ' SENDPIC ' + url + ' SENDPIC ' + mega[i] + ' SENDPIC ' + i);
    bummer.push(mega[i]);
    fs.writeFileSync('crapout.json', JSON.stringify(bummer), 'utf-8');
  }
  
}

http.createServer(function (req, res) {

  var i = Math.floor(Math.random() * mega.length * 5000);	
  var q = querystring.parse(url.parse(req.url).query);

  switch ( req.url) {
    // case '/last':
    //   res.writeHead(200, {'Content-Type': 'image/jpg' });
    //   res.end(last.pop(), 'binary');
    //   break;

    case '/m.html':
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(fs.readFileSync('m.html'));
      res.end();
      break;
    case '/C/':
      use_cache_index = true;
      sendPic(req.url, res);
      break;
    default:
      use_cache_index = false;
      sendPic(req.url, res);     

      break;
  }

  img = null;

}).listen(7777, '0.0.0.0');

console.log('Server running at http://localhost:7777/');