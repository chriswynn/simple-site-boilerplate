import resolve from "@rollup/plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import { uglify } from "rollup-plugin-uglify";
import postcss from "rollup-plugin-postcss";
import easyImport from "postcss-easy-import";
import nested from "postcss-nested";
import copy from "rollup-plugin-copy";

export default {
  input: "./js/main.js",
  output: {
    file: "./site/bundle.js",
    format: "iife"
  },
  plugins: [
    postcss({
      extract: "./site/style.css",
      plugins: [easyImport(), nested()]
    }),
    commonjs(),
    resolve(),
    uglify(),
    copy({
      targets: [{ src: "assets/**/*", dest: "./site/assets" }]
    })
  ]
};
