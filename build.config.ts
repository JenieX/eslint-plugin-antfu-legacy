import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/index',
  ],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
    inlineDependencies: [
      '@antfu/utils',
    ],
  },
  externals: [
    '@typescript-eslint/utils',
  ],
})
