var fs = require('fs');
var os = require('os');
var path = require('path');
var env = process.env;

// 包的名字
var packageName = env.npm_package_name;
// 包的版本
var version = env.npm_package_version;
// 项目路径，比如：/Users/xumeng/Meituan/grocery-mux-product
var INIT_CWD = env.INIT_CWD;
// npm的声明周期，详情：https://docs.npmjs.com/cli/v8/using-npm/scripts
var npm_lifecycle_event = env.npm_lifecycle_event

var prevVersion = '';
var currVersion = '';

var tips = '';

// 获取安装前的版本号
if (npm_lifecycle_event === 'preinstall') {
    prevVersion = version;
}

// 获取安装后的版本号
if (npm_lifecycle_event === 'postinstall') {
    currVersion = version;
}

console.log('prevVersion', prevVersion);
console.log('currVersion', currVersion);

function isShowTips() {
    if (prevVersion && currVersion){
        if (prevVersion.substring(0,3) !== currVersion.substring(0,3)) {
            tips = '\u001B[96mwarning：您当前升级的版本存在break-change，请关注升级文档 (\u001B[94m https://km.sankuai.com/page/1316040376 \u001B[96m) 获取更多信息!\u001B[0m\n';
            console.log(tips.replace(/\u001B\[\d+m/g, ''));
        }
    }
}

isShowTips();