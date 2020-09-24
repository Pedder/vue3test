# Vue JS - Version 3 Test

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## vue-form-generator

## simple-json-store

const JsonStore = require('simple-json-store');
const store = new JsonStore('./test.json', {foo: 'bar'});

// store.set('2020-09-22', JSON.stringify({'weather': 'sun'}));

console.log(store.get('awesome'));
//=> true

console.log(store.get('foo'));
//=> bar

store.del('awesome');

console.log(store.get('2020-09-22'));

store.set('2020-09-22', {
weather: "sun"
});
