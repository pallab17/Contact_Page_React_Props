import React from "react";

function Card(pooo) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{pooo.name}</h2>
        <img className="circle-img" src={pooo.img} alt="avatar_img" />
      </div>
      <div className="bottom">
        <p className="info">{pooo.tell}</p>
        <p className="info">{pooo.mail}</p>
      </div>
    </div>
  );
}

export default Card;
