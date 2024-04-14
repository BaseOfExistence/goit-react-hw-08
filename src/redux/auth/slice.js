import { createSlice } from "@reduxjs/toolkit"
import { register, login, logout, refreshUser } from "./operations"

const slice = createSlice({
    name: "auth",
    initialState: {
        user: {
            name: null,
            email: null,
        },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
    },
    extraReducers: builder => {
        builder
            .addCase(register.pending, (state) => {
                state.error = null
                state.isLoading = true
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false
                state.user = action.payload.user
                state.token = action.payload.token
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
            .addCase(login.pending, (state) => {
                state.error = null
                state.isLoading = true
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false
                state.user = action.payload.user
                state.token = action.payload.token
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
            .addCase(logout.pending, (state) => {
                state.error = null
                state.isLoading = true
            })
            .addCase(logout.fulfilled, (state) => {
                state.isLoading = false
                state.user = { name: null, email: null }
                state.token = null
            })
            .addCase(logout.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
            .addCase(refreshUser.pending, (state) => {
                state.error = null
                state.isLoading = true
                state.isRefreshing = true
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.user = action.payload
                state.isRefreshing = false
            })
            .addCase(refreshUser.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
                state.isRefreshing = false
            })
    }
})
export default slice.reducer