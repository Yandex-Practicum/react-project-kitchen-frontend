module.exports = {
  extends: ['airbnb-base', 'eslint:recommended', 'plugin:react/recommended'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    parser: '@babel/eslint-parser',
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
  rules: {
    'max-classes-per-file': ['off', 1], // максимальное количество классов на файл - 1. когда перепишем на функции, можно будет убрать это правило.
    'react/prop-types': ['off'], // пропускаем необходимость валидации пропсов. Пока ставлю Warn. Когда все пропсы провалидируем, можно будет убрать это правило.
    'default-param-last': 'off', // это нужно, чтобы в редъюсерах state по умолчанию мог находится в начале
    'no-console': 'off', // разрешаем показывать в консоли данные, но выводим предупреждение. Пока ставлю Warn
    'no-undef': ['off', { typeof: false }], // если переменные не определены, показывать только предупреждение, а не ошибку. Это тоже пока временно, есть в коде неопределенный объект window. Будем код переписывать и уберем это правило
    'consistent-return': 'off', // Пока ставлю Warn. Когда код будем переписывать, можно будет убрать это правило.
    'no-plusplus': 'off', // почему-то airBnb не разрешает два +, пока убираю, позже решим
    'no-param-reassign': 'off', // Тут он ругается переобъявление одной и той же переменной в redux - например, action. Пока ставлю Warn. Когда код будем переписывать, можно будет убрать это правило.
  },
};
