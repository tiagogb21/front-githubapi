import { URL_USERS } from "../data/data";

export const fetchUsers = () =>
  fetch(URL_USERS)
    .then((response) => response.json())
    .then((data) => data);

export const fetchSpecificUser = (user) => {
  return fetch(`${URL_USERS}/${user}/repos`)
    .then((response) => response.json())
    .then((data) => data);
};
