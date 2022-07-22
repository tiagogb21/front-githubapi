import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import MyContext from "./index";

import { fetchUsers, fetchSpecificUser } from "../../api/fetch";

function MyProvider({ children }) {
  const [dataUser, setDataUser] = useState([]);
  const [dataSpecificUser, setDataSpecificUser] = useState([]);

  useEffect(() => {
    const getDataFromUser = async () => {
      const data = await fetchUsers();
      setDataUser(data);
    };

    const getDataFromSpecificUser = async () => {
      const data = await fetchSpecificUser();
      setDataUser(data);
    };

    getDataFromUser();
    getDataFromSpecificUser();
  }, []);

  const store = {
    dataUser,
    dataSpecificUser,
    setDataSpecificUser,
  };

  return <MyContext.Provider value={store}>{children}</MyContext.Provider>;
}

MyProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any),
}.isRequire;

export default MyProvider;
