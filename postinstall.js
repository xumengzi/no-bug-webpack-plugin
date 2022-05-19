var fs = require('fs');
var os = require('os');
var path = require('path');
var env = process.env;

var packageName = env.npm_package_name;
var version = env.npm_package_version;

var BANNER = '\u001B[96mwarning：您当前升级的版本存在break-change，请关注升级文档 (\u001B[94m https://km.sankuai.com/page/1316040376 \u001B[96m) 获取更多信息!\u001B[0m\n';

function isBannerRequired() {
    console.log(packageName, version);
  if (packageName === 'mux-ui') {}
  return true;
}

function showBanner() {
  // eslint-disable-next-line no-console, regexp/no-control-character -- output
  console.log(COLOR ? BANNER : BANNER.replace(/\u001B\[\d+m/g, ''));
}

if (isBannerRequired()) showBanner();