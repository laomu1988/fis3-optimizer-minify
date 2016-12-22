var minifier = require('html-minifier');
var minify = minifier.minify;
var CleanCSS = require('clean-css');
var uglifyJS = require('uglify-js');
var _ = require('loadsh');


module.exports = function (content, file, conf) {
    if (!file || !file.release) {
        return '';
    }
    if (file.isHtmlLike) {
        return minify(content, _.extend({
            removeComments: true, // 是否去掉注释
            collapseInlineTagWhitespace: true,
            collapseWhitespace: true, //是否去掉空格
            minifyJS: true,
            minifyCSS: true
        }, conf));
    }
    else if (file.isCssLike) {
        conf.processImport = false;
        return new CleanCSS(_.extend({processImport: true}, conf)).minify(content).styles;
    }
    else if (file.isJsLike) {
        var js = uglifyJS.minify(content, _.extend({
            fromString: true
        }), conf);
        return uglifyJS.minify(content, _.extend({}, conf, {
            fromString: true
        })).code;
    }
    return content;
};