- Install Node version `v19.7.0`
- `npm install`
- `npm run build`

Current result:

```
cat public/assets/largeLib.js

(self.webpackChunkwebpack5_issue_20230725=self.webpackChunkwebpack5_issue_20230725||[]).push([[849],{616:()=>{console.log("hello large lib")},850:()=>{console.log("hello large lib")}}]);%
```

Expected result:

Expected the chunk `largeLib` to include the content of `app/assets/javascripts/large_lib.js` only once.

```
cat public/assets/largeLib.js

(self.webpackChunkwebpack5_issue_20230725=self.webpackChunkwebpack5_issue_20230725||[]).push([[849],{616:()=>{console.log("hello large lib")}}]);%
```
