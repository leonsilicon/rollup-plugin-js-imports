import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import jsImports from '../../../src/index.js';

export default defineConfig({
	plugins: [vue(), jsImports()],
	build: {
		lib: {
			formats: ['es'],
			entry: 'main.ts',
		},
	},
});
