### Protractor-Cucumber proof of concept

Proof of concept for protractor and cucumber. Uses typescript and page
objects.  

Uses sample app at
[https://github.com/ngrx/platform/tree/master/example-app](https://github.com/ngrx/platform/tree/master/example-app) for tests. This
needs to be running at localhost:4200 

#### Selenium

* Install Selenium
```
npm install selenium-standalone -g
selenium standalone update
selenium standalone start
```

#### Run Scripts

* Build the app
```
npm run build
```

* Run tests
```
npm test
```
