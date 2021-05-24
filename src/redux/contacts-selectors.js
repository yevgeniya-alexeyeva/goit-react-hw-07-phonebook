import { createSelector } from "reselect";

export const getAllContacts = (state) => state.items.contacts;

export const getFilter = (state) => state.filter;

export const getIsLoading = (state) => state.items.loading;

export const getFilteredContacts = createSelector(
  [getAllContacts, getFilter],
  (items, filter) => {
    if (!filter) return items;
    const normalizedFilter = filter.toLowerCase().trim();
    return isNaN(normalizedFilter)
      ? items.filter((item) =>
          item.name.toLowerCase().includes(normalizedFilter)
        )
      : items.filter((item) => item.number.includes(normalizedFilter));
  }
);
