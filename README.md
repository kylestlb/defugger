# defugger

![demo image](https://ipfs.pics/ipfs/QmeJyU3Z4Y3nB1kuAeV6LW2NtmxMmjWSv3ASSneQASBs3v)

when my code is super fugged and i am spitting out `console.log('code breaks here')` like my life depends on it, the console log in chromedevtools (or another browser's equivalent) is sometimes hard to reach.

so, i wanted to make an incredibly lightweight and simple debugging console that sits above my app in the browser window.  no css, just one js file to tag (or commonjs module to require).

## install

non-npm installs: Download defugger.js and include it in a `<script>` tag.

npm: `npm install @kylestlb/defugger --save`

currently the minified version is only for non module loading usage.

## usage

defugger inserts itself as the first child of the `<body>` tag in the window.

npm: 

`var defugger = require('@kylestlb/defugger');`

`var d = new defugger();`

`d.log('please print this line', defugger.level.INFO);`

plain ol' javascript is the same but without the require statement.


## development

`tsc` will compile the typescript, `npm run build` will create the commonjs module file.  other scripts are WIP.







