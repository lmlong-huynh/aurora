import { Config } from '@stencil/core';
import { vueOutputTarget } from '@stencil/vue-output-target';
import { sass } from '@stencil/sass';
export const config: Config = {
  namespace: 'stencil-library',
  globalStyle: 'src/global/variables.css',
  plugins: [sass()],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    vueOutputTarget({
      componentCorePackage: 'stencil-library',
      proxiesFile: '../vue-library/lib/components.ts',
    }),
  ],
};
