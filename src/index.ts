import { VueConstructor } from 'vue';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';
import '@/plugins';

const WrapperLib = {
  install: function (vue: VueConstructor): void {
    const requireComponent = require.context(
      './components', true, /\.vue$/,
    );
    /* eslint-disable-next-line */
    console.log(requireComponent.keys());

    const exclude: string[] = [];

    requireComponent.keys().forEach((path: string) => {
      const { length } = path.split('/');
      const fileName = path.split('/')[length - 1];

      if (!exclude.includes(fileName.replace('.vue', ''))) {
        const componentConfig = requireComponent(path);

        const componentName = upperFirst(
          camelCase(fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')),
        );

        vue.component(componentName, componentConfig.default || componentConfig);
      }
    });
  },
};

export default WrapperLib;

// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(WrapperLib);
}
