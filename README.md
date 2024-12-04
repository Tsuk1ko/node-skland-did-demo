# node-skland-did-demo

`fp.min.js` 来自 https://static.portal101.cn/dist/web/v3.0.0/fp.min.js

在本 demo 中由于选用的 `xmlhttprequest` 库有点小缺陷（但找不到其他适合的），需要额外将 `fp.min.js` 内容中所有 `'response'` 替换为 `'responseText'` 来兼容一下

`browser-env-fix.js` 来自 https://github.com/AlienwareHe/awesome-reverse/blob/main/js/browser-env-fix.js ，并进行了一些修改
