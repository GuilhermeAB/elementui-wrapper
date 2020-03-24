/* eslint-disable @typescript-eslint/ban-ts-comment */
import Vue from 'vue';
import {
  Button,
  Tag,
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// @ts-ignore
import lang from 'element-ui/lib/locale/lang/en';
// @ts-ignore
import locale from 'element-ui/lib/locale';

// Configure language
locale.use(lang);

// Import components - Component list reference -> https://github.com/ElemeFE/element/blob/master/components.json
Vue.use(Button);
Vue.use(Tag);
