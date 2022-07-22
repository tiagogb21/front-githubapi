import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import MyContext from "./myContext";

import { fetchUsers, fetchSpecificUser } from "../api/fetch";

function MyProvider({ children }) {
  const [dataUser, setDataUser] = useState([]);
  const [dataSpecificUser, setDataSpecificUser] = useState([]);

  useEffect(() => {
    const getDataFromUser = async () => {
      const data = await fetchUsers();
      setDataUser(data);
    };

    getDataFromUser();
  }, []);

  const getDataFromSpecificUser = async (user) => {
    const data = await fetchSpecificUser(user);
    setDataSpecificUser(data);
  };

  const store = {
    dataUser,
    dataSpecificUser,
    getDataFromSpecificUser,
  };

  return <MyContext.Provider value={store}>{children}</MyContext.Provider>;
}

MyProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any),
}.isRequire;

export default MyProvider;
