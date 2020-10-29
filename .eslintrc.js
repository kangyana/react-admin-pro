module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    page: true,
    // LODOP使用script加载在全局环境中
    LODOP: true,
  },
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    'react/jsx-key': ['error'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
  },
};
