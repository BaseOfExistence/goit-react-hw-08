import { createSlice } from "@reduxjs/toolkit"
import { fetchContacts, addContact, deleteContact } from "./operations"
import { logout } from "../auth/operations"

const slice = createSlice({
    name: "contacts",
    initialState: {
      items: [],
      loading: false,
      error: null
    },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.error = null
        state.isLoading = true
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false
        state.items = action.payload
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
      .addCase(addContact.pending, (state) => {
        state.error = null
        state.isLoading = true
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false
        state.items.push(action.payload)
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
      .addCase(deleteContact.pending, (state) => {
        state.error = null
        state.isLoading = true
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false
        const index = state.items.findIndex(
          (contact) => contact.id === action.payload.id
        )
        state.items.splice(index, 1)
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
    .addCase(logout.fulfilled, (state) => {
        state.items = [];
        state.loading = false;
    })
  },
})
export default slice.reducer
