import { BuildConfig } from "unbuild";
// @ts-ignore
import pkg from './package.json';

export default {
  entries: [
    {
      input: './src/index',
      name: pkg.name
    }
  ],
  // declaration: true
} as BuildConfig
