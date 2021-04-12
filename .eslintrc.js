module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module',
    parser: "babel-eslint"
  },
  parser: "vue-eslint-parser",
  env: { //指定环境
    browser: true,
    node: true,
    es6: true,
  },
  rules: {        //0，不启用这个规则   1，出现问题会有警告   2，出现问题会报错
    'no-console': process.env.NODE_ENV !== 'production' ? 0 : 1,
    'no-useless-escape': 0,
    'semi': [1, 'always'], // 行尾使用分号
    'indent': [2, 2, {  //缩进
      'SwitchCase': 1
    }],
    "comma-dangle": [2, "never"], //是否允许对象中出现结尾逗号
    "no-cond-assign": 2, //条件语句的条件中不允许出现赋值运算符
    "no-dupe-keys": 2, //对象中不允许出现重复的键
    "no-duplicate-case": 2, //switch语句中不允许出现重复的case标签
    "no-extra-semi": 2, //不允许出现不必要的分号
    "no-regex-spaces": 2, //正则表达式中不允许出现多个连续空格
    "no-unreachable": 2, //在return，throw，continue，break语句后不允许出现不可能到达的语句
    "use-isnan": 2, //要求检查NaN的时候使用isNaN()
    "no-alert": 1, //不允许使用alert，confirm，prompt语句
    "no-caller": 2, //不允许使用arguments.callee和arguments.caller属性
    "no-multi-spaces": 2, //不允许出现多余的空格
    "no-redeclare": 2, //不允许变量重复声明
    "no-sequences": 2, //不允许使用逗号表达式
    "no-label-var": 2, //不允许标签和变量同名
    "fun-call-spacing": [0, "never"], //函数调用时，函数名与()之间不能有空格
    "no-multiple-empty-lines": [2, { "max": 2 }], //空行最多不能超过两行
    "no-trailing-spaces": 2, //一行最后不允许有空格
    "no-extra-parens": 1, //不允许出现多余的括号
    "space-before-blocks": [2, "always"], //块前的空格
    "no-var": 1, //使用let和const代替var
    "eqeqeq": 0,  // == 验证
    "padded-blocks": [2, "never"],
    "arrow-spacing": [2, { "before": true, "after": true }],  //箭头函数空格限制
    "spaced-comment": [0, "always", { "exceptions": ["-"] }],
    "no-undef": 2,  //任何对未声明的变量的引用都会导致警告
    "no-unused-vars": [1, { "args": "none" }],  //消除未使用的变量  不检查函数的参数
    "prefer-promise-reject-errors": 0
  }
}