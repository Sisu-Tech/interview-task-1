module.exports = {
    root: true,
    env: {
        node: true,
        es2022: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json', './tsconfig.config.json'],
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'promise', 'import', 'simple-import-sort', 'prettier'],
    settings: {
        'import/resolver': {
            node: true,
            typescript: true,
        },
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:n/recommended',
        'prettier',
    ],
    rules: {
        '@typescript-eslint/no-unsafe-call': 0,
        '@typescript-eslint/no-unsafe-assignment': 0,
        '@typescript-eslint/no-unsafe-member-access': 0,
        '@typescript-eslint/no-unsafe-argument': 0,

        'n/exports-style': ['error', 'module.exports'],
        'n/file-extension-in-import': ['error', 'always'],
        'n/prefer-global/buffer': ['error', 'always'],
        'n/prefer-global/console': ['error', 'always'],
        'n/prefer-global/process': ['error', 'always'],
        'n/prefer-global/url-search-params': ['error', 'always'],
        'n/prefer-global/url': ['error', 'always'],
        'n/prefer-promises/dns': 'error',
        'n/prefer-promises/fs': 'error',

        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',

        'prettier/prettier': 'error',
    },
    overrides: [],
};
