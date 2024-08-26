import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.tasks.isLoading;
export const selectError = state => state.tasks.error;
export const selectFilterName = state => state.filter;


export const selectVisibleContacts = createSelector(
    [selectContacts, selectFilterName],
    (contacts, filter) => {
        return contacts.filter(contact => contact.name.toLowerCase()
            .includes(filter.toLowerCase()))
    }
)





// const selectContacts = useSelector(state => state.contacts.items);
// const selectNameFilter = useSelector(state => state.filter);