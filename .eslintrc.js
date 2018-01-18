module.exports = {
    //扩展插件
    "extends": [
        "airbnb",
        "plugin:flowtype/recommended"
    ],
    "plugins": [
        "flowtype",
        "compat"
    ],
    "env": {
        "browser": true,
        "jest": true
    },
    "rules": {
        // 0 = off, 1 = warn, 2 = error 
        //行尾缺少分号可能导致一些意外情况
        "no-unexpected-multiline": 2,
        //4个空格开头
        // "indent": [2, 4],
        //语句强制不分号结尾
        "semi": [2, "never"],
        //换行风格
        'linebreak-style': ["off", "windows"],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
    }
};