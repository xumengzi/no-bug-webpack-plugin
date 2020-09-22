const pluginName = 'noBugWebpackPlugin';

class noBugWebpackPlugin {
  constructor() {
    this.nobugs = `
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
    `;
  }
  apply(compiler){
    const { nobugs } = this;
    compiler.hooks.run.tap(pluginName, () => {
      console.log(nobugs)
    })
  }
};

module.exports = noBugWebpackPlugin;