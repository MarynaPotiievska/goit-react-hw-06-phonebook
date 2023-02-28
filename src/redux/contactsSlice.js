import { createSlice, nanoid } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsInitialState = {
	contacts: []
};

const contactsSlice = createSlice({
	name: "contacts",
	initialState: contactsInitialState,
	reducers: {
		addContact: {
			reducer(state, action) {
				return {
					...state,
					contacts: [
						...state.contacts,
						action.payload
					]
				}
			  },
			  prepare(contact) {
				return {
					payload: {
						id: nanoid(),
						name: contact.name,					
						phone: contact.number,
				    },
				};
			  },
		},
		deleteContact: {
			reducer(state, action) {
				return state.contacts.filter(contact => contact.id !== action.payload)
			}
		}
	}
});

const persistConfig = {
	key: 'contacts',
	storage,
};

export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer);
export const { addContact, deleteContact } = contactsSlice.actions;

// Selector
export const getContacts = state => state.contacts.contacts;
