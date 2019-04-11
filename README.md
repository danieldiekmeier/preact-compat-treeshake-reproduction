# preact/compat Treeshaking Reproduction

This is a reproduction for https://github.com/developit/preact/issues/1529

## Without importing `memo`

```sh
npx webpack -p without-memo.js
```

Output:

```
Hash: febc3b8c2d2e05421a21
Version: webpack 4.29.6
Time: 598ms
Built at: 04/11/2019 4:42:49 PM
  Asset      Size  Chunks             Chunk Names
main.js  8.53 KiB       0  [emitted]  main
Entrypoint main = main.js
[0] ./without-memo.js + 1 modules 8.56 KiB {0} [built]
    | ./without-memo.js 139 bytes [built]
    |     + 1 hidden module
```

## With importing `memo`

```sh
npx webpack -p with-memo.js
```

Output:

```
Hash: 2554e0796a0bf1050cf9
Version: webpack 4.29.6
Time: 756ms
Built at: 04/11/2019 4:42:16 PM
  Asset    Size  Chunks             Chunk Names
main.js  15 KiB       0  [emitted]  main
Entrypoint main = main.js
[0] ./with-memo.js + 3 modules 14.9 KiB {0} [built]
    | ./with-memo.js 182 bytes [built]
    |     + 3 hidden modules
```

As you can see: Even though in the `with-memo.js`, I only wanted to import `memo`, the bundle is actually 6.47kb larger – but the `memo` function is much smaller, even with its dependencies. (https://github.com/developit/preact/blob/master/compat/src/index.js#L281)
