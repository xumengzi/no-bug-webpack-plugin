var fs = require('fs');
var os = require('os');
var path = require('path');
const { argv } = require('process');
var env = process.env;

// 包的名字
var packageName = env.npm_package_name;
// 包的版本
var version = env.npm_package_version;
// 项目路径，比如：/Users/xumeng/Meituan/grocery-mux-product
var INIT_CWD = env.INIT_CWD;
// npm的声明周期，详情：https://docs.npmjs.com/cli/v8/using-npm/scripts
var npm_lifecycle_event = env.npm_lifecycle_event

var currVersion = '';

var tips = '';

// 获取安装后的版本号 0.1.0  0.2.0 0.3.1
if (npm_lifecycle_event === 'postinstall') {
    currVersion = version;
    const versionObj = getChangeList();
    if (versionObj && Object.keys(versionObj).length) {
        if (versionObj[currVersion]) {
            isShowTips(versionObj[currVersion]);
        }
    } else if (currVersion.substring(currVersion.length - 1) === '0') {
        isShowTips();
    }
}

function isShowTips(description = '改动较多，请注意') {
    tips = `**************************************************************************************
          \u001B[96mwarning：您当前升级的版本${currVersion}存在break-change：${description}，        
          请关注升级文档 (\u001B[94m https://km.sankuai.com/page/1316040376 \u001B[96m) 获取更多信息!\u001B[0m 
************************************************************************************
\n
        `;
    console.log(tips.replace(/\u001B\[\d+m/g, ''));
}

function getChangeList() {
    try {
        let changeObj = fs.readFileSync('./breakchange.json', 'utf8')
        changeObj = JSON.parse(changeObj);
        
        return changeObj;
    } catch (err) {
        console.error(err)
        return null;
    }
}