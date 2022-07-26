import React, { useState, useContext } from "react";
import { useNavigate } from "react-router";
import MyContext from "../../context/myContext";

import "./style.css";

function Main() {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(12);

  const { dataUser, getDataFromSpecificUser, setUserImage, setUserLogin } =
    useContext(MyContext);

  const navigate = useNavigate();

  const handleClick = (login, image) => {
    getDataFromSpecificUser(login);
    navigate("/user");
    console.log(image);
    setUserImage(image);
    setUserLogin(login);
  };

  return (
    <main className="container__user">
      {dataUser.length > 0 &&
        dataUser.slice(min, max).map((user) => (
          <button
            type="button"
            className="box__user"
            key={user.id}
            onClick={() => handleClick(user.login, user.avatar_url)}
          >
            <img
              className="user-avatar"
              src={user.avatar_url}
              alt={user.login}
            />
            <p className="user-name">{user.login}</p>
          </button>
        ))}
      <button
        type="button"
        onClick={() => {
          setMin((old) => (old < 0 ? 24 : old - 12));
          setMax((old) => (old < 0 ? 30 : old - 12));
        }}
      >
        Previous
      </button>
      <button
        type="button"
        onClick={() => {
          setMin((old) => {
            // console.log(old);
            old = old > 24 ? 0 : old + 12;
            // console.log(old);
            return old;
          });
          setMax((old) => (old > 30 ? 12 : old + 12));
        }}
      >
        Next
      </button>
    </main>
  );
}

export default Main;
