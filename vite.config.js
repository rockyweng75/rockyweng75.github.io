import { defineConfig } from 'vite';
import vue from "@vitejs/plugin-vue";
const { viteMockServe } = require('vite-plugin-mock')
import commonjsExternals from 'vite-plugin-commonjs-externals';

// import { UserConfigExport, ConfigEnv } from 'vite';

import path from "path";
const pathSrc = path.resolve(__dirname, "src");

export default defineConfig(({command, mode}) => {
  let prodMock = false
  return {
    base: '/',
    mode: command !== 'serve',
    plugins: [
      vue(),
      viteMockServe ({
        supportTs: false,
        mockPath: 'mock',
        localEnabled: command === 'serve',
        prodEnabled: command !== 'serve' && prodMock,
      }),
      commonjsExternals({
        externals: ['path', /^electron(\/.+)?$/],
      })
    ],
    resolve: {
      alias: {
        "/@": path.resolve(__dirname, "src"),
      },
    },
    css: {
      postcss: {
        plugins: [
            {
              postcssPlugin: 'internal:charset-removal',
              AtRule: {
                charset: (atRule) => {
                  if (atRule.name === 'charset') {
                    atRule.remove();
                  }
                }
              }
            }
        ],
      },
    }
  };
});
