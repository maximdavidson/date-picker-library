import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import alias from '@rollup/plugin-alias';
import path from 'path';
import packageJson from './package.json';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      alias({
        entries: [
          {
            find: 'assets',
            replacement: path.resolve(__dirname, 'src/assets'),
          },
          {
            find: 'components',
            replacement: path.resolve(__dirname, 'src/components'),
          },
          {
            find: 'decorators',
            replacement: path.resolve(__dirname, 'src/decorators'),
          },
          { find: 'hooks', replacement: path.resolve(__dirname, 'src/hooks') },
          {
            find: 'providers',
            replacement: path.resolve(__dirname, 'src/providers'),
          },
          { find: 'utils', replacement: path.resolve(__dirname, 'src/utils') },
          {
            find: 'constants',
            replacement: path.resolve(__dirname, 'src/constants'),
          },
        ],
      }),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      terser(),
    ],
  },
];
