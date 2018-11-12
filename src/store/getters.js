const getters = {
  app: state => state.app,
  user: state => state.app.user,
  role: state => (state.app.user ? state.app.user.role || null : null)
}
export default getters
