import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    checked: [],
  };

  friendCheck = id => {
    // Loop through the checked array to see if the id of the clicked character has ALREADY been clicked
    for (i = 0 ; i < this.state.checked.length ; i++) {
      if (this.state.checked[i] === id) {
        newGame();
        break;
      }
    }

    goodGuess();

    //When a character card is clicked, its id is added to the state.checked array.
    this.setState({ checked: [...this.state.checked, id] })
    console.log(this.state.checked)
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            friendCheck={this.friendCheck}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
