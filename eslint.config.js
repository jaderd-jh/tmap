import antfu from '@antfu/eslint-config'
import oxlint from 'eslint-plugin-oxlint'

export default antfu(
  {
    lessOpinionated: true,
    stylistic: {
      overrides: {
        'curly': ['error', 'multi-line', 'consistent'],
        'style/multiline-ternary': 'off',
        'style/brace-style': ['error', '1tbs'],
        'style/indent-binary-ops': 'off',
        'style/comma-dangle': 'off',
        'style/arrow-parens': ['error', 'as-needed'],
        'style/member-delimiter-style': [
          'error',
          {
            multiline: {
              delimiter: 'none',
              requireLast: false,
            },
            singleline: {
              delimiter: 'semi',
              requireLast: false,
            },
          },
        ],
      },
    },
  },
  oxlint.configs['flat/recommended']
)
