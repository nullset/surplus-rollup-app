import surplus from 'rollup-plugin-surplus';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from "rollup-plugin-terser";
import html from 'rollup-plugin-fill-html';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'iife',
  },
  plugins: [
    surplus(),
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs(),
    terser(),
    html({
      template: 'src/index.html',
      filename: 'index.html'
    })
  ],
};