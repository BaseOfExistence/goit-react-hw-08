import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { setAuthHeader } from "../auth/operations";

axios.defaults.baseURL = "https://connections-api.herokuapp.com"
export const fetchContacts = createAsyncThunk("contacts/fetchAll",
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;
        if (persistedToken === null) {
            return thunkAPI.rejectWithValue('Unable to fetch contacts');
        }
        try {
            setAuthHeader(persistedToken)
            const response = await axios.get("/contacts")
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    })
export const addContact = createAsyncThunk("contacts/addContact",
    async (newContact, thunkAPI) => {
        try {
            const response = await axios.post("/contacts", newContact)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    })
export const deleteContact = createAsyncThunk("contacts/deleteContact",
    async (contactId, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${ contactId }`)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
})