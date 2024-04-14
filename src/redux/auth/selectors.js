export const selectToken = (state) => state.auth.token
export const selectUserName = (state) => state.auth.user.name
export const selectIsRefreshing = (state) => state.auth.isRefreshing