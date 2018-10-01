import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} onClick={() => props.handleIncrement(props.id)}/>
    </div>
  </div>
);

export default FriendCard;
