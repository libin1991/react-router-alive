import babel from 'rollup-plugin-babel';

export default [
  {
    input: './index.js',
    output: [
      {
        file: 'bin/bundle.js',
        format: 'cjs'
      }
    ],
    plugins: [
      babel({
        exclude: 'node_modules/**',
        externalHelpers: true,
        plugins: ['@babel/external-helpers']
      })
    ],
    external: [
      'fs',
      'path',
      'jsonfile',
      'invariant',
      'path-to-regexp',
      'prop-types',
      'react',
      'warning'
    ]
  }
];
