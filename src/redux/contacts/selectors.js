import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts;

export const selectFilterValue = state => state.filter;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectErrorValue = state => state.contacts.error;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilterValue],
  (contacts, filterValue) => {
    const visibleContacts = contacts.items.filter(item => {
      const itemName = item.name.toLowerCase();
      return itemName.includes(filterValue);
    });

    return visibleContacts;
  }
);
