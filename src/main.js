
const array = [1, 2, 3]
// 传统写法
// eslint不进行代码检测格式检测注释
/* eslint prefer-arrow-callback: "off" */
array.forEach(function e(v) {
  /* eslint-disable no-console */
  console.log(v)
})
// ES6
// eslint 不进行代码检测格式检测注释
/* eslint-disable no-console */
array.forEach(v => console.log(v))

