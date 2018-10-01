import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Instructions from "./components/Instructions";
import friends from "./friends.json";
import "./App.css";

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

  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
    this.setState({ friends });
  };
  
  clickCounter = () => {
    // We always use the setState method to update a component's state
    this.setState({ clickCount: this.state.clickCount + 1 });
    this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <h1 className="score">Score: {this.state.count}</h1>            
        <Instructions></Instructions>
        {this.state.friends.map(friend => (
          <FriendCard
            handleIncrement={this.handleIncrement}
            id={friend.id}
            name={friend.name}
            key={friend.id}
            image={friend.image}
            clickCount={this.state.clickCount}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
