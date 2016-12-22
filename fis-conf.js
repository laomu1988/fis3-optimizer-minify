fis.set('project.files', 'demo/index.html');

var minify = require('./index.js');

fis.match('**', {
    optimizer: minify
});