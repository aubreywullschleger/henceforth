var express = require('express');
var router = express();
var path = require('path');
var port = process.env.PORT || 9000;

router.use(express.static(path.join(__dirname, '/public')));

router.listen(port);
console.log('listening on port ' + port);