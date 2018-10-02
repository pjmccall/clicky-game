import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Instructions from "./components/Instructions";
import friends from "./friends.json";
import "./App.css";

let count = 0;

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    count: 0,
    clickCount: 0
  };

//  removeFriend = id => {
//    // Filter this.state.friends for friends with an id not equal to the id being removed
//    const friends = this.state.friends.filter(friend => friend.id !== id);
//    // Set this.state.friends equal to the new friends array
//    this.setState({ friends });
//  };

clickCount = id => {
  const friends = this.state.friends;
  const cardClick = friends.filter(friend => friend.id === id);

  if (cardClick[0].click) {

    count = 0;

    for (let i = 0; i < friends.length; i++) {
      friends[i].click = false;
    }

    this.setState({count});
    this.setState({friends});

  } else {
    cardClick[0].click = true;

    count = count + 1;


    friends.sort((y, z) => {
      return 0.5 - Math.random();
    });

    this.setState({friends});
    this.setState({count});
  }
};

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <h1 className="score">Score: {this.state.count}</h1>            
        <Instructions></Instructions>
        {this.state.friends.map(friend => (
          <FriendCard
            clickCount={this.clickCount}
            id={friend.id}
            name={friend.name}
            key={friend.id}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
