## JS/NodeJs tests [TDD](fail/pass/refactor)
### Review JavaScript testing frameworks 
https://www.browserstack.com/guide/top-javascript-testing-frameworks
### Select https://mochajs.org [JS Mocha cheat-sheet](TDD_JS_mocha)
### Set up CLI:
npm init
npm install mocha chai --save-dev

>> Add to package.json:
  "scripts": {
    "test": "mocha"
  },
  "mocha":{
    "spec": [ "**/*.sp*.js"]
  } 

npm test

### Set up UI for VSCode:
Mocha Test Explorer [https://marketplace.visualstudio.com/items?itemName=hbenl.vscode-mocha-test-adapter]

### Try to use Java-like assertions:
```java
 @Test
 void test_add() {
    Expect
	assertThat
 }
```
=> chai - expect(), assert() and should-style assertions

## Just run
1. from CLI: `node .\hello.js`
2. from UI: Code Runner [https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner]
