const getters = {
  app: state => state.app,
  user: state => state.app.user,
  role: state => (state.app.user ? state.app.user.role || null : null),
  roles: state => state.app.roles,
  roler: state =>
    state.app.roles.find(
      i => i.id == (state.app.user ? state.app.user.role || null : null)
    ) || { id: '?', name: '?' }
}
export default getters
