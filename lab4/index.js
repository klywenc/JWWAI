const http = require('http');
const fs = require('fs');
const events = require('events');
const util = require('util');


function startHttpServer() {
  const server = http.createServer(function (req, res) {
    if (req.url === '/') {
      fs.readFile('./titles.json', function (err, data) {
        if (err) {
          console.error(err);
          res.end('titles.json error');
          return;
        }
        const titles = JSON.parse(data.toString());
        fs.readFile('./template.html', function (err, data) {
          if (err) {
            console.error(err);
            res.end('template.html error');
            return;
          }
          const tmpl = data.toString();
          const html = tmpl.replace('%', titles.join('</li><li>'));
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(html);
        });
      });
    }
  });

  server.listen(8000, '127.0.0.1', () => {
    console.log('Serwer HTTP działa na http://localhost:8000');
  });
}


function Watcher(watchDir, processedDir) {
  this.watchDir = watchDir;
  this.processedDir = processedDir;
}

util.inherits(Watcher, events.EventEmitter);

Watcher.prototype.watch = function () {
  const watcher = this;
  fs.readdir(this.watchDir, function (err, files) {
    if (err) throw err;
    for (const file of files) {
      watcher.emit('process', file);
    }
  });
};

Watcher.prototype.start = function () {
  const watcher = this;
  fs.watchFile(this.watchDir, function () {
    watcher.watch();
  });
};

function startWatcher() {
  const watchDir = './watch';
  const processedDir = './done';

  const watcher = new Watcher(watchDir, processedDir);

  watcher.on('process', function (file) {
    const watchFile = `${this.watchDir}/${file}`;
    const processedFile = `${this.processedDir}/${file.toLowerCase()}`;
    fs.rename(watchFile, processedFile, function (err) {
      if (err) throw err;
    });
  });

  watcher.start();
  console.log('Watcher rozpoczął monitorowanie katalogu.');
}


startHttpServer();

startWatcher();
