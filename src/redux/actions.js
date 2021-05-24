import { createAction } from "@reduxjs/toolkit";

const changeFilter = createAction("changeFilter");

const fetchContactsRequest = createAction("fetchContactsRequest");
const fetchContactsSuccess = createAction("fetchContactsSuccess");
const fetchContactsError = createAction("fetchContactsError");

const addContactRequest = createAction("addContactRequest");
const addContactSuccess = createAction("addContactSuccess");
const addContactError = createAction("addContactError");

const removeContactRequest = createAction("removeContactRequest");
const removeContactSuccess = createAction("removeContactSuccess");
const removeContactError = createAction("removeContactError");

export const actions = {
  changeFilter,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
};
