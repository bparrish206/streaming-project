var fs = require('fs');
var ws = fs.createWriteStream(process.argv[2]);
var through = require('through');

process.stdin.pipe(through(write, end));

function write (buf) {
  ws.write(buf);
  process.stdout.write(buf);
}
function end () {
    console.log('__END__');
}
