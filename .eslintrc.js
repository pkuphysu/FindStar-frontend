module.exports = {
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  extends: 'standard',
  env: {
    es6: true,
    browser: true
  },
  plugins: [
    'svelte3'
  ],
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3'
    }
  ],
  rules: {
    // sveltejs/eslint-plugin-svelte3#82
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 2 }]
  }
}
