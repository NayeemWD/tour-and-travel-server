import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import prettierPlugin from 'eslint-plugin-prettier'

/** @type {import('eslint').Linter.Config[]} */
export default [
    { files: ['**/*.{js,mjs,cjs,ts}'] },
    { languageOptions: { globals: globals.node } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,

    {
        ignores: ['node_modules', 'dist'],
        rules: {
            'no-unused-vars': 'error',
            'no-undef': 'error',
            'no-unused-expressions': 'error',
            'prefer-const': 'error',
            'no-console': 'warn',
            'prettier/prettier': 'error', // Ensure Prettier formatting rules are enforced
        },
    },
    prettierPlugin.configs.recommended, // Correct way to include eslint-plugin-prettier
]
