fis.set('project.files', 'demo/index.html');

var minify = require('./index.js');

fis.match('::package', {postpackager: fis.plugin('loader')});

fis.hook('relative');
fis.match('**', {
    relative: true,
    optimizer: minify
});