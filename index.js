const pluginName = 'noBugWebpackPlugin';

class noBugWebpackPlugin {
  constructor(options) {
    const defaultOptions = {
      description: '神兽保佑       永无BUG!',
      author: ''
    }
    this.opts = Object.assign({}, defaultOptions, options);
    const { description, author } = this.opts;
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
#            ${description}
#
#                   ${author ? 'created by ' + author : ''}
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