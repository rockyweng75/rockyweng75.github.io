import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';

import page from './page.js'
import attack from './attack.js'

export function setupProdMockServer() {
  createProdMockServer([
    ...page,
    ...attack
  ]);
}