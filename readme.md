
# fis3-optimizer-minify

fis3压缩html,js,css

## 安装
```
npm install -g fis3-optimizer-minify
```

## 使用
```
// fis-conf.js

fis.match('**', {
    optimizer: fis.plugin('minify')
});

```

假如不压缩html, 只压缩js和css
```
fis.match('*.{js,css}', {
    optimizer: fis.plugin('minify')
});
```