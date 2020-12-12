/*
 * @Author: your name
 * @Date: 2020-12-11 19:20:39
 * @LastEditTime: 2020-12-12 10:44:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \monitor-core\rollup.config.js
 */
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import path from 'path';
import ts from 'rollup-plugin-typescript2';
import cleaner from 'rollup-plugin-cleaner';

const extensions = ['.ts', '.tsx', '.js', '.jsx'];
const tsconfig = path.resolve(__dirname, 'tsconfig.json');

export default [
  {
    input: './src/index.ts',
    output: {
      dir: 'dist/esm',
      format: 'esm',
    },
    plugins: [
      cleaner({ targets: ['./dist/'] }),
      resolve({ extensions }),
      commonjs(),
      ts({ tsconfig }),
    ]
  },
  {
    input: './src/index.ts',
    output: {
      dir: 'dist/umd',
      format: 'umd',
      name: 'MMonitorCore',
      globals: {
        react: 'React'
      }
    },
    plugins: [
      resolve({ 
        extensions
      }),
      commonjs(),
      ts({ 
        tsconfigOverride: { compilerOptions: { declaration: false } }, 
        tsconfig
      }),
    ]
  }
]