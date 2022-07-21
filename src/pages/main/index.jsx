import React, { useEffect, useState } from "react";

import { fetchUsers } from "../api/fetch";

function Main() {
  const [dataUser, setDataUser] = useState([]);

  useEffect(() => {
    const getDataUser = async () => {
      const data = await fetchUsers();
      setDataUser(data);
    };
    getDataUser();
  }, []);

  return (
    <main className="container__user">
      {dataUser.length > 0 &&
        dataUser.map((user) => (
          <article className="box__user" key={user.id}>
            <img
              className="user-avatar"
              src={user.avatar_url}
              alt={user.login}
            />
            <p className="user-name">{user.login}</p>
          </article>
        ))}
    </main>
  );
}

export default Main;
