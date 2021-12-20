import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';

import page from './page.js'

export function setupProdMockServer() {
  createProdMockServer([
    ...page
  ]);
}