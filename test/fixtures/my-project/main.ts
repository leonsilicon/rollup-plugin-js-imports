import { file1 } from './file1.js';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { file2 } from './file2.js';
import App from './app.vue';

console.log(App, file1, file2);
