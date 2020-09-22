## 神兽保佑, 永无bug

### 在终端里显示神兽保佑, 永无bug的信息.

使用方法如下:
1. 下载 `npm i no-bug-webpack-plugin`
2. 导入 `const noBugWebpackPlugin = require('no-bug-webpack-plugin')`
3. 使用 和普通的插件使用方式一样 `new noBugWebpackPlugin()`

#### 全部配置属性
```js
new noBugWebpackPlugin({
  description: string, // 默认值为 神兽保佑       永无BUG!
  author: string  // 默认为空
})
```

```
#         ┌─┐       ┌─┐
#      ┌──┘ ┴───────┘ ┴──┐
#      │                 │
#      │       ───       │
#      │  ─┬┘       └┬─  │
#      │                 │
#      │       ─┴─       │
#      │                 │
#      └───┐         ┌───┘
#          │         │
#          │         │
#          │         │
#          │         └──────────────┐
#          │                        │
#          │                        ├─┐
#          │                        ┌─┘
#          │                        │
#          └─┐  ┐  ┌───────┬──┐  ┌──┘
#            │ ─┤ ─┤       │ ─┤ ─┤
#            └──┴──┘       └──┴──┘
#            神兽保佑       永无BUG!
#  
```