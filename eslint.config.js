import jhqn from '@jhqn/eslint-config'
import oxlint from 'eslint-plugin-oxlint'

export default jhqn(
  {
    lessOpinionated: true,
    stylistic: {
      overrides: {
        'style/indent': 'off',
        'style/operator-linebreak': 'off',
      },
    },
  },
  oxlint.configs['flat/recommended']
)
