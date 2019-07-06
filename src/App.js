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
    score : 0,
  };
  
  
  friendCheck = id => {
    // Loop through the checked array to see if the id of the clicked character has ALREADY been clicked
    this.state.checked.map(guess => {
      if (guess === id) {
        console.log("newGame()");
      }
    })
    //This function will increase the user's score and 
    // when a character card is clicked, its id is added to the state.checked array.
    let score = this.state.score + 1
    this.setState({ score })
    this.setState({ checked: [...this.state.checked, id] })
    console.log(this.state.checked)
    console.log(this.state.score)
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
