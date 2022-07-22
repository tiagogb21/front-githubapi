import React, { useContext } from "react";
import MyContext from "../../context/myContext";

import "./style.css";

function User() {
  const { dataSpecificUser } = useContext(MyContext);
  console.log(dataSpecificUser);

  return (
    <main className="container__specifc-user">
      <section className="info__specifc-user"></section>
      <section className="project__specifc-user">
        {dataSpecificUser !== undefined &&
          dataSpecificUser.map((item) => (
            <article className="project" key={item.id}>
              <article className="project-info">
                <p className="project-name">
                  {item.full_name.split("/")[1].split(".")[0]}
                </p>
                <p className="project-type">
                  {item.private ? "public" : "private"}
                </p>
              </article>
              <article>
                <p>
                  <span className="bold-item">Created at</span>:{" "}
                  {item.created_at}
                </p>
              </article>
            </article>
          ))}
      </section>
    </main>
  );
}

export default User;
