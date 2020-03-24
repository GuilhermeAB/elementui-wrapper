# wrapper

Element UI wrapper

## Project setup
```
yarn install
```
### Compiles and minifies for production
```
yarn build

// Lib Build
yarn build:lib
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint

yarn lint:css
```

### Usage: 
```
// main.js

import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import wrapper from 'wrapper';

Vue.use(ElementUI);
Vue.use(wrapper);

```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
