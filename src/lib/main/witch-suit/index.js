import mm from 'micromatch'

export default function(router) {
  const config = {
    rules: [],
    before() {},
    after() {}
  }

  const rules = list => (config.rules = list)
  const before = func => (config.before = func)
  const after = func => (config.after = func)

  router.beforeEach((to, from, next) => {
    config.before({ to, from, next })
    for (let item of config.rules) {
      let { match, validator, reactor } = item
      if (mm.isMatch(to.path, match)) {
        if (validator({ to, from })) {
          let rst = reactor({ to, from })
          if (rst) return next(rst)
        }
      }
    }
    next()
  })

  router.afterEach(() => {
    config.after()
  })

  return {
    rules,
    before,
    after
  }
}
