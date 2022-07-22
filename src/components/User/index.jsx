import React, { useContext, useState } from "react";
import MyContext from "../../context/myContext";

import "./style.css";

function User() {
  const [max, setMax] = useState(10);
  const { dataSpecificUser, userImage, userLogin } = useContext(MyContext);
  console.log(dataSpecificUser);

  const handleClick = (branch) => {
    // branches_url
  };

  return (
    <main className="container__specifc-user">
      <section className="info__specifc-user">
        {/* Img */}
        <img className="user-image" src={userImage} alt={userLogin} />
        {/* Name */}
        <h2 className="user-name">{userLogin}</h2>
      </section>
      <section className="project__specifc-user">
        <h3 className="choose">Para ver as branchs, escolha um projeto:</h3>
        {dataSpecificUser !== undefined &&
          dataSpecificUser.slice(0, max).map((item) => (
            <button type="button" className="project" key={item.id}>
              <article className="project-info">
                <button
                  type="button"
                  className="project-name"
                  onClick={() => handleClick(item.branches_url)}
                >
                  {item.full_name.split("/")[1].split(".")[0]}
                </button>
                <p className="project-type">
                  {item.private ? "privado" : "publico"}
                </p>
              </article>
              <article>
                <p>
                  <span className="bold-item">Criado em</span>:{" "}
                  {item.created_at.split("T")[0]}
                </p>
              </article>
            </button>
          ))}
        {max < dataSpecificUser.length && (
          <button type="button" onClick={() => setMax((old) => old + 10)}>
            More Projects
          </button>
        )}
      </section>
    </main>
  );
}

export default User;
