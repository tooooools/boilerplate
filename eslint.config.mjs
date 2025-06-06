import neostandard, { resolveIgnoresFromGitignore } from 'neostandard'

export default [
  ...neostandard({
    env: ['browser'],
    ignores: resolveIgnoresFromGitignore()
  }),
  {
    rules: {
      'import-x/no-absolute-path': 'off',

      'react/jsx-key': 'off',
      'react/jsx-closing-tag-location': 'off',
      'react/no-direct-mutation-state': 'off',
      'react/no-unescaped-entities': 'off',
      'react/no-unknown-property': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/no-string-refs': 'off',
      'react/jsx-handler-names': 'off'
    }
  }
]
