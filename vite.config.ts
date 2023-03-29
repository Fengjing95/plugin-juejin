/*
 * @Date: 2023-03-27 21:35:37
 * @Author: 枫
 * @LastEditors: 枫
 * @description: description
 * @LastEditTime: 2023-03-28 19:51:14
 */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import monkey, { cdn } from 'vite-plugin-monkey';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    monkey({
      entry: 'src/main.tsx',
      userscript: {
        icon: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/favicon-32x32.png',
        name: '掘金首页添加专栏跳转',
        namespace: 'feng',
        author: '小枫',
        version: '0.0.1',
        description: '掘金首页添加专栏跳转, 减少想访问专栏时的多次跳转',
        match: ['https://juejin.cn/*'],
        grant: ['window.onurlchange'],
      },
      build: {
        externalGlobals: {
          'react': cdn.jsdelivr('React', 'umd/react.production.min.js'),
          'react-dom': cdn.jsdelivr(
            'ReactDOM',
            'umd/react-dom.production.min.js',
          ),
        },
      },
    }),
  ],
});
