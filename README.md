The minified file is available at https://typescriptServices-min-js-builds.github.io/v4.4.3/dist/typescriptServices.min.js

This repository holds a `typescriptServices.js` module minified with webpack.

A somewhat sad thing is that typescript project structure is designed around a single `ts` namespace
where every definition is stored, making it a one large object with tree-shaking effectively impossible.
Let's pray that typescript team will eventually refactor their project to es6 modules or smth.
